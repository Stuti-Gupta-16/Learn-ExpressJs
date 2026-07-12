//now instead of doing everything in the same file we divide the different routes in different file 
const express=require('express');
// const hostRouter=require('.');
// const userRouter=require('');
const app=express();
const path=require('path');
//using file helper
//now let us make the css file folder public
const rootDir=require('./util/path.js');
//this is the one without the css file
app.get("/",(req,res,next)=>{
    console.log(req.url, req.method);
   res.sendFile(path.join(__dirname,"views","home.html"));
});
app.use(express.static(path.join(rootDir,'public')))
//now how to use the seller route 
//export it
const sellerRouter=require("./routers/seller.js");
const hostRouter=require("./routers/user.js");
// app.get("/seller", (req, res, next) => {
//   console.log(req.url, req.method);
//   res.send(`<form action="/seller" method="POST">
//     <input type="text" name="hName" placeholder="Enter name of your house" />
//     <br>
//     <button type="submit">Submit</button>
//   </form>`);
// });
//now istead of boy-parser we can use something else also this something else is used below
// app.use(express.urlencoded());//this also parser the data in the same way and the data parser is added into the req.body like the previous method
// app.post("/seller", (req, res, next) => {
//   console.log(req.url, req.method);
//   res.send(`
//     Home registered SuccessFully`);
// });


//now we can store all these work of the seller into a different file rather than keeeping everything together in this way the every thing will be simplified : store in different folder if you want to maintain everything neatly
app.use("/user", hostRouter);//this add /user as prefix in the host router website without mentioning it in the main file but it is important to give whole path in the form action
app.use(express.urlencoded());
app.use(sellerRouter);

const port=3000;
app.listen(port,()=>{
    console.log("The server is running easily in PORT: 3000");
});
