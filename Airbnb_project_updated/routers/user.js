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
const Favourite=require("../models/fav");

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

userRouter.get("/index",(req,res,next)=>{































  res.render("index/booking",{title : "Index Page"});
})


userRouter.get("/fav", (req, res, next) => {
  console.log("Fav route hit");

  Favourite.getFile((favourite) => {
    console.log("Favourite array:", favourite);

    Home.fetchAll((house) => {
      console.log("House array:", house);

      const favhome = house.filter((home) => favourite.includes(home.id));

      console.log("Filtered:", favhome);

      res.render("User/fav_list", {
        title: "Favourite list",
        home: favhome,
      });
    });
  });
});
userRouter.post("/fav",(req,res,next)=>{
  console.log("Element added to Fav",req.body.id);
  console.log(req.body.id);
  Favourite.add(req.body.id,error =>{
    if(error) console.log(error);
    res.redirect("/user/fav");
  });
  
})

userRouter.get("/:userId", (req, res, next) => {
  const id = req.params.userId; //it is a way of getting data from the url
  console.log("this is the /userid page");
  Home.findById(id, (name) => {
    if (!name) {
      res.redirect("/user/home");
      //this redirects the page
    } else {
      console.log("Home Details Found");
      res.render("User/home_detail", { title: "Detail Page", home: [name] });
    }
  });
});
userRouter.post("/delete/:homeid",(req,res,next)=>{
  const id= req.params.homeid;
  Favourite.deleteById(id,err=>{
    if(err) console.log("Error occured");
    res.redirect("/user/fav");
  })
})
module.exports=userRouter;