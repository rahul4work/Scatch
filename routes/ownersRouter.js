const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("heyy owners is working");
});

module.exports = router;