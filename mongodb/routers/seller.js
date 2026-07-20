const express = require("express");
const sellerRouter = express.Router();
const path = require("path");
const rootDir = path.dirname(require.main.filename);
const connect = require("../controller/home");
sellerRouter.get("/home", connect.addform);

// const file = [];
// sellerRouter.use(express.urlencoded());
// sellerRouter.post('/home',(req,res,next)=>{
//     file.push({HouseName:req.body.HouseName, Rent:req.body.price, Location:req.body.location , Rating:req.body.rate , image:req.body.url});
//     //here we can also write file.push(req.body) then the key will be the name from html file but here the key is the one we have created
//     console.log(req.body);
//     // res.sendFile(path.join(rootDir,"views","seller2.html"));
//     res.render('seller2',{title:"Registration Successful"});
// })this was the old way when data was stored in a simple array format
//now to use the exported part
// sellerRouter.post('/home',connect.formFilled)
//if we do this we need to also remove the location of file an array that holds the details of the hotel
//how to export it from the controller file we have it there important thing to note is we can keep .urlcoded here only

const Home = require("../models/home");
const { title } = require("process");
sellerRouter.use(express.urlencoded());
sellerRouter.post("/home", (req, res, next) => {
  // const h=new Home(req.body.HouseName,req.body.price,req.body.location,req.body.rate,req.body.url);this is a lot of work rather do it like
  const { HouseName, price, location, rate, url ,description} = req.body;
  const h = new Home(HouseName, price, location, rate, url, description);
  h.save().then(()=>{
     res.render("Seller/seller2", { title: "Registration Successful" });
  })
 
});
sellerRouter.get("/list", (req, res, next) => {
  //   const list = Home.fetchAll(());
  // res.render("user", { title: "Registered Homes", home: list });
  Home.fetchAll().then(list=> {
    res.render("Seller/admin_home_list", {
      title: "Registered Homes",
      home: list,
    });
  });
});
// sellerRouter.get("/edit",(req,res,next)=>{
//     res.render("Seller/edit",{title:"Edit Page"})
// })

sellerRouter.get("/edit/:homeid", (req, res, next) => {
  const h = req.params.homeid;
  const edit = req.query.editing;

  Home.findById(h).then(r=> {
    if (!r) res.redirect("/seller/list");
    else {
      console.log(h, edit, r);
      res.render("Seller/edit", { title: "Edit Page", home: r, val: edit });
    }
  });
});

sellerRouter.post("/edit", (req, res, next) => {
  const { id, HouseName, price, location, rate, url,description } = req.body;
  const h = new Home(id,HouseName, price, location, rate, url,description);

  h.update(id).then(()=>{
     res.redirect("/seller/list");
  });
 
});
sellerRouter.post("/delete/:homeid", (req, res, next) => {
  const h = req.params.homeid;
  console.log("This is delete page");
  Home.deleteById(h).then(home=>{
    console.log("element Deleted");
  }).catch((err) => {
    if (err) console.log("Error is there");
    
  }).finally(()=>{
    res.redirect("/seller/list");
  });
});
exports.sellerRouter = sellerRouter;
// exports.list=file;
