const express=require('express');
const hostRouter=express.Router();
const {homes}=require('./seller');
const {getAddHome}=require('../controller/home')
// hostRouter.get('/home',(req,res,next)=>{
//     console.log(homes);
//     res.send("This is user Page of Airbnb Page");
// })//now we are doing this work usin the controller
hostRouter.get("/home",getAddHome)
module.exports=hostRouter;