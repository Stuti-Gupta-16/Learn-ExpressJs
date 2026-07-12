
const express = require("express");
const path = require("path");
const app = express();
const rootDir = path.dirname(require.main.filename);
app.set('view engine','ejs');
app.set('views','Pages');
const {homes}= require("./routers/seller.js");
// app.get("/", (req, res, next) => {
//   console.log(req.url, req.method);
//   res.sendFile(path.join(__dirname, "Pages", "home.html"));
// });
app.get("/", (req,res,next)=>{
    res.render('home',{homes:homes , title:"Airbnb Home Page"});
})

app.use(express.static(path.join(rootDir, "public")));

const {sellerRouter} = require("./routers/seller.js");
const hostRouter = require("./routers/user.js");

app.use("/user", hostRouter);

app.use(express.urlencoded({ extended: true }));

app.use(sellerRouter);

const port = 3000;

app.listen(port, () => {
  console.log("The server is running on PORT: 3000");
});