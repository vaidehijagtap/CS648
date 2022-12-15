const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const dbURL = "mongodb+srv://aditi:user2022@nodeproject-6ejkm.mongodb.net/test?retryWrites=true&w=majority";

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const Product = mongoose.model('product', {
    "id": Number,
    "product": {
       "productid": Number,
       "category": String,
       "price": Number,
       "name": String,
       "instock": Boolean
    }
})

app.get('/product/get/', function (req, res) {
    Product.find({}, (err, products) => {
        console.log(products)
        res.send(products);
    });
});

app.post('/product/create', function (req, res) {
    const newProduct = req.body.product;
    if(newProduct){
        const product = new Product({
            id: newProduct.id,
            product: {
                productid: newProduct.id,
                category: newProduct.category,
                price: newProduct.price,
                name: newProduct.name,
                instock: !!newProduct.instock
            }
        });
        product.save((err) => {
            if(err){
                res.sendStatus(500);
            }
        });
        res.sendStatus(200);
    }
    else {
        res.sendStatus(500);
    }
});

app.put('/product/update/:id', function (req, res) {
    const id = req.params.id;
    Product.updateOne({ id }, req.body.product, function(err, res) {

    });
    res.sendStatus(200);
});

app.delete('/product/delete/:id', function (req, res) {
    const id = req.params.id;

    if(id){
        Product.deleteOne({ id }, function (err) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(500);
    }
});

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log("connected");
})

var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
});