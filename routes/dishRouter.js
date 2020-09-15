const express = require('express');

const bodyParser = require('body-parser');


const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) =>{
    res.StatusCode = 200;
    res.setHeader('Content-Type', 'test/plain');
    next();
})

.get((res, req, next)=>{
    res.end('Will send all the dishes to you soon!');
})

.post((req, res, next)=>{
    res.end('Will add the dishes ' + req.body.name + ' with detials' +
        req.body.description);
})

.put((req,res, next)=>{
    res.StatusCode = 403;
    res.end('Update operation is not supported');
})


.delete((req, res, next)=>{
    res.end('Delete all dishes!');
});


module.exports = dishRouter;