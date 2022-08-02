const express = require('express')
const app = express();
const quotes = require('./routes/quotes')
const products = require('./data.js')
const hbs = require('hbs')

const staticPath = __dirname + "/public"

app.use('/public', express.static(staticPath))
app.set('view engine', 'hbs')
app.set('views', './templates')

hbs.registerPartials('./templates/partials')

app.get('/', (req, res) => {
    res.render('index', products)
})

app.get("/api/products", (req, res) => {
    let {limit} = req.query
    let newProducts = products.map((product) => {
        let {id, title, price, category, image} = product
        return {id, title, price, category, image}
    })
    if(limit){
        newProducts = newProducts.slice(0, Number(limit))
    }
    res.json(newProducts)
})
app.get("/api/products/:productID", (req, res) => {
    let {productID} = req.params
    let selectedProduct = products.find((product) => {
        return product.id === Number(productID)
    })
    res.json(selectedProduct)
})

app.get("/api/products/:productID/image/:imageID", (req, res) => {
    console.log(req.params)
    res.send("Hello")
})


app.use('/quotes', quotes)


app.get("*", (req, res) => {
    res.sendStatus(404)

})


app.listen(8000, () => {
    console.log("Server is running at port 8000")
})
