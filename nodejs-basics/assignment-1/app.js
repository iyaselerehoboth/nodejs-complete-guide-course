const http = require('http');

const route = require('./routes');

/**
 * Assignment 1:
 * 
 * - Spin up a node-js driven server on port 3000
 * 
 * - Handle 2 routes: "/" and "/users"
 *  1. Return some greeting text on "/"
 *  2. Return a list of dummy users (eg. <ul><li>User 1</li></ul>)
 * 
 * - Add a form with a "username" <input> to the "/" page and submit a POST request
 * to "/create-user" upon a button click.
 * 
 * - Add te "/create-user" route and parse the incoming data (ie. the username) and 
 * simply log it in the console.
 */

const server = http.createServer(route.handler);

server.listen(3000);