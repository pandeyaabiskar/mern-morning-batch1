const express = require('express');
const fs = require("fs");
const cors = require('cors');
const app = express();
const quotesRouter = require('./routes/quotes')


app.use(cors());

app.use('/static', express.static(__dirname + "/public"));

app.get('/' , (req, res) => {
    res.status(200).send('Hello from Express Server');
})

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }
const data = fs.readFileSync("quotes.json", "utf-8");
const parsedData = JSON.parse(data).quotes;


app.use(quotesRouter);



// app.get('/download', (req, res) => {
//     res.download('./info.txt');
// })

// app.get('/details', (req, res) => {
//     res.json({name: "Aabiskar", class: "MERN"})
// })

app.listen(4000, () => {
    console.log("Server started at port 4000");
})