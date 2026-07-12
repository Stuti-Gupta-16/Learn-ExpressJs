const express=require('express');
const path=require('path');
const app = express();
app.set('view engine','ejs');
app.set('views','views')

const rootDir=path.dirname(require.main.filename);
const userRouter=require("./routers/user");
const {sellerRouter}=require("./routers/seller");
app.use(express.static(path.join(rootDir,"public")));

app.get('/',(req,res,next)=>{
    res.render('home', { title: "AirBnB Home" });
}
);
app.use('/user',userRouter);
app.use(express.urlencoded());
app.use('/seller',sellerRouter);
app.use((req,res,next)=>{
    res.status(404).render('Page',{title:"Page Not Found"});
    //it runs when the page code becomes 404 i.e site not found
})
const port=3000;
app.listen(port,()=>{
    console.log("The Server is working");
})
