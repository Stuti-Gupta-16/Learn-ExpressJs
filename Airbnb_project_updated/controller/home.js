//here all the main connection part exists
exports.addforms = (req, res, next) => {
  // res.sendFile(path.join(rootDir,"views","seller.html"));
  res.render("Seller/seller", { title: "AirBnB - Register Home" });
};
// const file = [];
// exports.formFilled = (req, res, next) => {
//   file.push({
//     HouseName: req.body.HouseName,
//     Rent: req.body.price,
//     Location: req.body.location,
//     Rating: req.body.rate,
//     image: req.body.url,
//   });
//   console.log(req.body);
//   // res.sendFile(path.join(rootDir,"views","seller2.html"));
//   res.render("seller2", { title: "Registration Successful" });
// };

//now here we want to use the same page for editing and adding the next hotel 
//so the new code becomes

exports.addform = (req,res,next)=>{
  res.render("Seller/edit",{title: "Add-Home",val:false});
}