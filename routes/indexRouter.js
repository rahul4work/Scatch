const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

// Home route
router.get("/", function (req, res) {
    let error = req.flash("error");
    res.render("index", { error, loggedin: false });
});

// Shop route
router.get("/shop", isLoggedIn, async function (req, res) {
    try {
        let products = await productModel.find();
        let success = req.flash("success");
        if (!products || products.length === 0) {
            console.warn("No products found");
            return res.status(404).render("shop", { products: [], success: "No products available." });
        }
        res.render("shop", { products, success });
    } catch (error) {
        console.error("Error in /shop route:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Cart route
router.get("/cart", isLoggedIn, async function (req, res) {
    try {
        let user = await userModel
            .findOne({ email: req.user.email })
            .populate({
                path: 'cart.productId',
                model: 'product'
            });

        if (!user) {
            return res.status(404).send("User not found");
        }

        let bill = 0;
        if (user.cart && user.cart.length > 0) {
            bill = user.cart.reduce((total, item) => {
                if (item.productId && item.productId.price !== undefined) {
                    const itemPrice = item.productId.price;
                    const itemDiscount = item.productId.discount || 0;
                    const quantity = item.quantity || 1;
                    return total + ((itemPrice - itemDiscount) * quantity);
                }
                return total;
            }, 0);
            bill += 20; // Delivery charge
        }

        res.render("cart", { user, bill });

    } catch (error) {
        console.error("Error in /cart route:", error);
        res.status(500).send("Internal Server Error: " + error.message);
    }
});

// Add to cart
router.get("/addtocart/:productid", isLoggedIn, async function (req, res) {
    try {
        let user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            req.flash("error", "User not found.");
            return res.redirect("/shop");
        }

        const productId = req.params.productid;
        const existingCartItem = user.cart.find(item => item.productId.toString() === productId);

        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            user.cart.push({ productId: productId, quantity: 1 });
        }

        await user.save();
        req.flash("success", "Added to cart");
        res.redirect("/shop");
    } catch (error) {
        console.error("Error adding to cart:", error);
        req.flash("error", "Failed to add to cart.");
        res.redirect("/shop");
    }
});

// Remove item from cart (AJAX)
router.delete('/cart/remove/:itemId', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const initialCartCount = user.cart.length;
        user.cart = user.cart.filter(item => item._id.toString() !== req.params.itemId);

        if (user.cart.length === initialCartCount) {
            return res.status(404).json({ success: false, message: 'Item not found in cart' });
        }

        await user.save();
        
        // Populate to calculate totals
        await user.populate('cart.productId');
        const newTotal = user.cart.reduce((total, item) => {
            return total + ((item.productId.price - (item.productId.discount || 0)) * item.quantity);
        }, 0) + 20; // Add delivery charge

        res.json({ 
            success: true, 
            newTotal,
            cartCount: user.cart.reduce((count, item) => count + item.quantity, 0)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Update item quantity (AJAX)
router.patch('/cart/update/:itemId', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const cartItem = user.cart.find(item => item._id.toString() === req.params.itemId);
        if (!cartItem) {
            return res.status(404).json({ success: false, message: 'Item not found in cart' });
        }

        if (req.body.action === 'increase') {
            cartItem.quantity += 1;
        } else if (req.body.action === 'decrease') {
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            } else {
                // Remove if quantity would be 0
                user.cart = user.cart.filter(item => item._id.toString() !== req.params.itemId);
            }
        }

        await user.save();
        
        // Populate to calculate totals
        await user.populate('cart.productId');
        const newTotal = user.cart.reduce((total, item) => {
            return total + ((item.productId.price - (item.productId.discount || 0)) * item.quantity);
        }, 0) + 20; // Add delivery charge

        res.json({ 
            success: true,
            newQuantity: cartItem ? cartItem.quantity : 0,
            newTotal,
            cartCount: user.cart.reduce((count, item) => count + item.quantity, 0),
            removed: !cartItem
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Clear entire cart
router.delete('/cart/clear', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        user.cart = [];
        await user.save();

        res.json({
            success: true,
            cartCount: 0,
            newTotal: 0
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Logout route
router.get("/logout", isLoggedIn, function (req, res) {
    req.logout(function(err) {
        if (err) {
            console.error("Logout error:", err);
            return res.redirect("/");
        }
        res.redirect("/");
    });
});

router.get('/checkout', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email })
            .populate('cart.productId');
        
        if (!user || user.cart.length === 0) {
            req.flash('error', 'Your cart is empty');
            return res.redirect('/cart');
        }

        const subtotal = user.cart.reduce((total, item) => {
            return total + (item.productId.price * item.quantity);
        }, 0);

        const discount = user.cart.reduce((total, item) => {
            return total + ((item.productId.discount || 0) * item.quantity);
        }, 0);

        res.render('payment', {
            user,
            cartCount: user.cart.reduce((count, item) => count + item.quantity, 0),
            subtotal,
            discount,
            total: subtotal - discount
        });
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).send('Server Error');
    }
});

router.post('/checkout', isLoggedIn, async (req, res) => {
    try {
        const { paymentMethod, upiId, deliveryAddress } = req.body;
        const user = await userModel.findOne({ email: req.user.email })
            .populate('cart.productId');

        if (!user || user.cart.length === 0) {
            req.flash('error', 'Your cart is empty');
            return res.redirect('/cart');
        }

        // Create order
        const order = new orderModel({
            user: user._id,
            items: user.cart.map(item => ({
                product: item.productId._id,
                quantity: item.quantity,
                price: item.productId.price
            })),
            totalAmount: user.cart.reduce((total, item) => {
                return total + (item.productId.price * item.quantity);
            }, 0),
            paymentMethod,
            deliveryAddress: deliveryAddress || user.address,
            status: 'pending'
        });

        await order.save();
        
        // Clear cart
        user.cart = [];
        await user.save();

        req.flash('success', 'Order placed successfully!');
        res.redirect('/orders');
    } catch (error) {
        console.error('Checkout error:', error);
        req.flash('error', 'Failed to process order');
        res.redirect('/cart');
    }
});

module.exports = router;