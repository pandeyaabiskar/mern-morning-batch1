const express = require('express')
const router = express.Router();

router.get('/quotes', (req,res) => {
    // res.json(parsedData[generateRandomInteger(parsedData.length)])
    res.send("We are in quotes page");
})

module.exports = router;

