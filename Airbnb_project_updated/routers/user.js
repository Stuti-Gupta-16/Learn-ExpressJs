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
  //   const list = Home.fetchAll(());
  // res.render("user", { title: "Registered Homes", home: list });
  Home.fetchAll((list) => {
    res.render("User/user", { title: "Registered Homes", home: list });
  });
});
userRouter.get("/booking",(req,res,next)=>{
  res.render("User/booking",{title : "Booking Page"});
})
userRouter.get("/fav", (req, res, next) => {
  res.render("User/fav_list", { title: "Favourite list" });
});

userRouter.get("/index",(req,res,next)=>{
  res.render("index/booking",{title : "Index Page"});
})
module.exports=userRouter;