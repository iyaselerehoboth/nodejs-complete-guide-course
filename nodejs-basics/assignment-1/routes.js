const fs = require('fs');

const handler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/"){

        res.write("<html>");
        res.write("<h1>Whatsapp, welcome to my simple nodejs program.</h1>");
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" placeholder="Create username"><button type="submit">Send</button></form></body>');
        res.write("</html");
        return res.end();
    }

    if(url === "/users"){

        res.write("<html><ul>James Boaner</ul><ul>Faith Isikwe</ul><ul>Dr. Rafjastin</ul></html>");
        return res.end();

    }

    if(url === "/create-user" && method === "POST"){

        const body = [];
    
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {   
                res.statusCode = 302;
                res.setHeader('Location', '/');
                console.log(`User: ${message} has been successfully created`);
                return res.end();
            });
        });
    }


};

module.exports = {
    handler: handler
};