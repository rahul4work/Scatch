const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("heyy product is working");
});

module.exports = router;