const express = require('express')

const router = express.Router();

/**
 * 'use' works for every kind of requests (ie. post, get, delete, patch etc)
 */

router.get('/add-product', (req, res, next) => {
    console.log('In the add-product middle ware');
    res.send('<form action="/product" method = "POST"><input type="text" name="title"><button type="submit">Add Product</button>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;