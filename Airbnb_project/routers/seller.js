const express=require('express');
const sellerRouter=express.Router();
const path=require('path');
//this creates a new route 
//to use it we can 
// sellerRouter.get("/seller/add", (req, res, next) => {
//   console.log(req.url, req.method);
//   res.send(`<form action="/seller/add" method="POST">
//     <input type="text" name="hName" placeholder="Enter name of your house" />
//     <br>
//     <button type="submit">Submit</button>
//   </form>`);
// });
sellerRouter.get("/seller/add", (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','seller_main.html'));
    //this is a process of sending the file 
})
sellerRouter.use(express.urlencoded());
sellerRouter.post("/seller/add", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(`
    Home registered SuccessFully`);
});
//now to use it we export it 
module.exports=sellerRouter;
// module.exports=path.dirname(require.main.filename); this wont work because this file already have a exported value
