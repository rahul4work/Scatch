const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("heyy user is working");
});

module.exports = router;