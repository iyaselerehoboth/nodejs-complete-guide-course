const path  = require('path');

const express = require('express');

const router = express.Router();

/**
 * 'use' works for every kind of requests (ie. post, get, delete, patch etc)
 */

// url: /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// url: /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;