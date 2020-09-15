const express = require('express');

const bodyPaser= require('body-parser');


const leaderRouter = express.Router();

leaderRouter.use(bodyPaser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next)=>{
    res.end('Getting all the leaders detials')
})

.post((req,res,next)=>{
    res.end('The leader name '+ req.body.name + ' with the details ' + req.body.details);
})

.put((req,res,next)=>{
    res.end('Updating is not supported');
})

.delete((req,res,next)=>{
    res.end('Leaders resources are deleted');
})


leaderRouter.route('/:leaderId')
.get((req, res, next)=>{
    res.end('Getting the leader detials with id: '+req.params.leaderId)
})

.post((req,res,next)=>{
    res.end('Updating is not supported');
})

.put((req,res,next)=>{
    res.write('Updating leader id: ' +req.params.leaderId)
    res.end('The leader name '+ req.body.name + ' with the details ' + req.body.details);
})

.delete((req,res,next)=>{
    res.end('Deleted leader id: ' +req.params.leaderId);
})


module.exports = leaderRouter;