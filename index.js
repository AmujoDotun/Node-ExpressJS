const express = require('express');

const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const port = 3000;

const app = express();
const hostname ='localhost';

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

//ROuter
app.use('/dishes', dishRouter); 
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);




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