const express=require('express');
const http=require('http');
const app=express();
const port=3000;
//this is creating middleware
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});
app.use((req,res,next)=>{
    console.log("This is first middleware");
    next();//without this we wont go to the next middleware
})
// app.use("/", (req, res, next) => {
//   console.log(req.url);
//   res.send("This is home page");
//   next();
// });//this generates an error the reason why it generates an error is because "/" also runs when /submit is called as "/" means anything after this will make it run . there fore we are seeing this is home page as both the app.use are working to avoid this fix the order or things method specific i.e 
app.get("/", (req, res, next) => {
  console.log(req.url);
  res.send("This is home page");
  next();
});//this wont run as it is method specific 
//we can also use these then as url specific
app.use("/submit",(req,res,next)=>{
    console.log(req.url);//the express gives the url after the /submit url. Also if we visit /submit/hello still this code will run as when we use use the express compares the prefix part only 

    res.send("This is submit page");
})
app.use("/", (req, res, next) => {
  console.log(req.url);
  res.send("This is home page");
  next();
});
app.use((req,res,next)=>{
    console.log("This is second middleware");
})
// const server=http.createServer(app)
// server.listen(port,()=>{
//     console.log("This is express");
// })
//in this above code we are creating a server and then listening it we can even listen the server directly from the app
app.listen(port,()=>{
    console.log("This is the server start");
})
