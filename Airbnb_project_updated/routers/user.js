const express=require('express');
const userRouter=express.Router();
const path=require('path');
const rootDir=path.dirname(require.main.filename);

// const {list}=require("./seller")
// userRouter.get('/home',(req,res,next)=>{
//     res.render('user',{title:"Registered Homes",home:list});
// })till now the data was stored in normal array format but now it is in the object format
//how to access the data 

const Home =require("../models/home");

userRouter.get("/home", (req, res, next) => {
    const list = Home.fetchAll();
  res.render("user", { title: "Registered Homes", home: list });
});

module.exports=userRouter;