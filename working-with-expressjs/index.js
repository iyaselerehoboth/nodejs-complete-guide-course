const express = require('express');

const app = express();

/**
 * 'use' method allows us to create a middleware, 
 * that would be executed for every incoming request.
 */
app.use((req, res, next) => {
    console.log("In the middleware");
    next(); //Allows the request to continue on to the next middleware in line
});

app.use((req, res, next) => {
    console.log("In another middleware");
    res.send('<h1> Hello from ROBO ! </h1>');
});

app.listen(3000);