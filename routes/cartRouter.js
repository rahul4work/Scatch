const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");
const productModel = require("../models/product-model");

// Remove item from cart
router.delete("/remove/:productId", async function (req, res) {
    try {
        const productId = req.params.productId;
        const userId = req.user._id; 

        // Remove the product from user's cart
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $pull: { cart: { productId: productId } } }, // <-- Change from _id to productId
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ 
            success: true, 
            message: "Item removed from cart successfully",
            cartCount: updatedUser.cart.length
        });
    } catch (err) {
        console.error('Error removing item from cart:', err);
        res.status(500).json({ 
            success: false, 
            message: "Error removing item from cart", 
            error: err.message 
        });
    }
});

// Update cart item quantity
router.put("/update/:productId", async function (req, res) {
    try {
        const productId = req.params.productId;
        const { quantity } = req.body; // Expecting quantity in request body
        const userId = req.user._id; 

        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1"
            });
        }

        // This query works IF your user model's cart is structured with productId and quantity
        const updatedUser = await userModel.findOneAndUpdate(
            { _id: userId, "cart.productId": productId }, // <-- Changed to cart.productId
            { $set: { "cart.$.quantity": quantity } },
            { new: true }
        );

        if (!updatedUser) {
            // This means either the user or the product in their cart wasn't found
            return res.status(404).json({
                success: false,
                message: "Product not found in cart or user not found"
            });
        }

        res.json({ 
            success: true, 
            message: "Cart updated successfully",
            cartCount: updatedUser.cart.length // This might need to be adjusted if you're not populating
        });
    } catch (err) {
        console.error('Error updating cart:', err);  
        res.status(500).json({ 
            success: false, 
            message: "Error updating cart", 
            error: err.message 
        });
    }
});

// Get cart items
router.get("/", async function (req, res) {
    try {
        const userId = req.user._id;
        const user = await userModel.findById(userId).populate('cart');
        
        res.json({
            success: true,
            cart: user.cart,
            cartCount: user.cart.length
        });
    } catch (err) {
        console.error('Error fetching cart:', err);
        res.status(500).json({
            success: false,
            message: "Error fetching cart",
            error: err.message
        });
    }
});

module.exports = router;