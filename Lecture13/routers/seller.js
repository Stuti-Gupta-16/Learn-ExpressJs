const express=require('express');
const sellerRouter=express.Router();
const path=require('path');
sellerRouter.get("/seller/add", (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','Pages','seller.html'));
    //this is a process of sending the file 
});
sellerRouter.use(express.urlencoded());
//now to display all the data that is being filled by the user we can create an array 
const register=[];
sellerRouter.post("/seller/add", (req, res, next) => {
  console.log(req.url, req.method);
  register.push({houseName:req.body.Hname});
  res.send(`
    Home registered SuccessFully`);
});
//now to use it we export it 
// module.exports=sellerRouter;
exports.sellerRouter = sellerRouter;
exports.homes=register;
//to export multiple values we can create an object here inside the module.export={sellerRouter, register }
//or we can have exports.router=sellerRouter 
// exports.register= register
//here .router is the name or key and this process is abit complicated compared to the normal one 
//now the one receving it will have two values so while importing it should be const {sellerRouter}=require("./routes/seller")//this only gives the sellrRouter not the whole i.e register is not accessable
