const express = require('express');

const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next()
})

.get((req,res,next)=>{
    res.end('Sending a the promotions!');
})

.post((req,res,next)=>{
    res.end('Will add the promotion ' + req.body.name + ' with detials ' + req.body.detials);
})

.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Update is not in the operation!');
})

.delete((req,res,next)=>{
    res.end('Promotions is deleted!');
})


module.exports = promoRouter;

