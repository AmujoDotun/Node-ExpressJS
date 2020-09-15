const express = require('express');

const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');

const port = 3000;

const app = express();
const hostname ='localhost';

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

//ROuter
app.use('/dishes', dishRouter); 
// app.use('/dishes/:dishId', dishRouter);
app.use('/promos', promoRouter);
// app.use('/promos/:promoId', promoRouter);


// Working with each resource

// app.get('/dishes/:dishId', (res, req, next)=>{
//     res.end('Will send all the dishes to you for! ' + req.params.dishId);
// });

// app.post('/dishes/:dishId', (req, res, next)=>{
//     res.end('Post update is not in operation for /dishes/ '+ req.params.dishId)
// });

// app.put('/dishes/:dishId', (req,res, next)=>{
//     res.write('Updating dish '+ req.params.dishId)
//     res.end('Will Update the dish ' +req.body.name + 
//         ' with detials ' + req.body.description)
// });


// app.delete('/dishes/:dishId', (req, res, next)=>{
//     res.end('Delete dishes for' + req.params.dishId);
// });


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