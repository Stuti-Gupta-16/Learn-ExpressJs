const express = require("express");
const bodyparser=require("body-parser")
const app = express();
app.use((req, res, next) => {
    console.log(req.url);
  console.log("This is dummy middleware page 1");
  next();
});
app.use((req, res, next) => {
     console.log(req.url);
  console.log("This is second dummy middleware");
  next();
});
app.use((req, res, next) => {
     console.log(req.url);
  console.log("This is Third dummy middleware");
//   res.send("<p> This is due to the third middleware");
    next();
});
app.get("/", (req, res, next) => {
     console.log(req.url);
  console.log("This is The home page dummy middleware");
   res.send("This is the home page");
});
app.use(bodyparser.urlencoded());
app.post("/contact-us", (req, res, next) => {
  console.log(req.url);
  console.log("This is the form page");
  res.send(`Your Response have been submiited
     The details that you have submiited are
     <br> ${req.body}
     <br>
     1. Name: ${req.body.name}
     2. Gender :${req.body.gender}`);
  console.log(req.body);
  //this is how we can parser the data we have gotten from the form
});
app.use("/contact-us", (req, res, next) => {
    console.log(req.url);
    console.log(`this is form 
     `)
    res.send(
      `<form action="/contact-us" method="POST"> <input type="text" name="name" placeholder="Enter your name"> <br> <input type="radio" name="gender" value="male">  <label for="male"> Male </label>
       <input type="radio" name="gender" value="female"/> 
       <label for="female"> Female </label> <br><br><button type="submit">Submit</button> </form>`
    );
});


app.use("/", (req, res, next) => {
    console.log(req.url);
  console.log("This is the home2 page");
  res.send("This is the home page");
})
const port=3000;
app.listen(port,()=>{
    console.log("Running the server");
});
