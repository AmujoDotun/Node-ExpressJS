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

promoRouter.route('/:promoId')

.get((req,res,next)=>{
    res.end('sending in promotion id: ' + req.params.promoId)
})

.post((req,res,next)=>{
    res.end('You have to can not create a post with an existing id');
})

.put((req, res, next)=>{
    res.write('Updating the promotion id: ' + req.params.promoId)+ '<br>'+
    res.end('Updating promotion ' + req.params.promoId);
})

.delete((req, res, next)=>{
    res.end('Deleted promo id: ' +req.params.promoId)
})


module.exports = promoRouter;

