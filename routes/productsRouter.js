const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.get("/create", function (req, res) {
    res.render("createproducts");  // Render the form
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
        res.redirect("/owners/admin");
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
