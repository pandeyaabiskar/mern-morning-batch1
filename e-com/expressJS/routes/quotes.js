const express = require('express');
const router = new express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the quotes page")
})

router.get("/inspirational", (req, res) => {
    res.send("Welcome to the insipirational quotes page")
})

router.get("/funny", (req, res) => {
    res.send("Welcome to the funny quotes page")
})

router.get("/serious", (req, res) => {
    res.send("Welcome to the serious quotes page")
})

router.get("*", (req, res) => {
    res.send("No such quotes page")
})

module.exports = router;
