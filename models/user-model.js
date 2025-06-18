const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL'], // Example sizes, adjust as needed
        default: 'M'
    },
    color: {
        type: String,
        default: 'Default'
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
}, { _id: true }); // Ensure each cart item has its own ID

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
        required: [true, 'Full name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    cart: [cartItemSchema],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order' // Assuming you'll have an Order model
    }],
    contact: {
        type: String,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Simple 10-digit phone number validation
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    picture: {
        type: String,
        default: 'default-user.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

// Update the updatedAt field before saving
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Virtual for cart total
userSchema.virtual('cartTotal').get(function() {
    return this.cart.reduce((total, item) => {
        // Note: This assumes productId is populated when accessed
        return total + (item.productId.price * item.quantity);
    }, 0);
});

// Virtual for cart item count
userSchema.virtual('cartCount').get(function() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
});

module.exports = mongoose.model("User", userSchema);