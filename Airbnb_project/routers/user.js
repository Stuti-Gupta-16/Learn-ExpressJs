const express=require('express');
const hostRouter=express.Router();
hostRouter.get('/home',(req,res,next)=>{
    res.send("This is user Page of Airbnb Page");
})
module.exports=hostRouter;