const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
    
        /* Create a listener that fires whenever a new chunk of data 
           is transmitted in the current ongoing request transfer 
           (nodejs transfers the data in chunks and not necessarily at once depending on the size).
        */
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        /*
            On end of the data transfer, we then create a buffer from the body array.
        */
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {   
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    
    }
    
    //console.log(req.url, req.method, req.headers);
    //process.exit()
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First NodeJS Page</title></head>');
    res.write('<body><h1>Hello from my Nodejs server !</h1></body>');
    res.write('</html>');
    res.end();
};

/*
- A method of exporting just one function.

module.exports = requestHandler;
*/


/*
- Method A of exporting multiple functions.

module.exports = {
    handler: requestHandler,
    someText: 'Some text or so'
};
*/

//Method B of exporting multiple functions. Or you can remove 'module' and  just call it exports.handler etc...
module.exports.handler = requestHandler;
module.exports.someText = 'This is some hard coded text here';