const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.get("/create", function (req, res) {
    let success = req.flash("success");
    res.render("createproducts", { success });  // Pass success message to template
});

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
        });

        req.flash("success", "Product created successfully");
        res.redirect("/products/create"); // Redirect back to the form to show success message
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;