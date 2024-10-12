const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// Create an owner only if in development mode and no owners exist
if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
                .status(500)
                .send("You don't have permission to create a new owner");
        }

        let { fullname, email, password } = req.body;

        let createOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });

        // Set success flash message after owner creation
        req.flash('success', 'Owner created successfully!');

        // Redirect to the admin page after creating the owner
        res.redirect('/owners/admin');
    });
}

router.get("/admin", function (req, res) {
    let success = req.flash("success");
    res.render("createproducts", {success});
});


module.exports = router;
