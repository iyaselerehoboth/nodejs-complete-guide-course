const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/**
 * 'use' method allows us to create a middleware, 
 * that would be executed for every incoming request.
 */

app.use(bodyParser.urlencoded({extended: false})); //Middleware function used to parse the body of every request

//Using "/admin" here filters requests such that only requests that start with /admin/..... are redirected to this adminRoutes router.
app.use('/admin', adminRoutes);

app.use(shopRoutes);

//Catch any unhandled requests with a 404 page.
app.use((req, res, next) => {
    res.status(404).send('<h1>Sorry, page not found </h1>');
});

app.listen(3000);