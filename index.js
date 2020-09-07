const express = require('express');

const http = require('http');

const port = 3000;

const app = express();
const hostname ='localhost';

app.use((req,res, next)=>{
    console.log(req.headers);
    
    res.StatusCode =200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello ExpressJs</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});