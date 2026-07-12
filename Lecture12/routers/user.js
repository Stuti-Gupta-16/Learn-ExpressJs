const express=require('express');
const hostRouter=express.Router();
const {homes}=require('./seller');
hostRouter.get('/home',(req,res,next)=>{
    console.log(homes);
    res.send("This is user Page of Airbnb Page");
})
module.exports=hostRouter;