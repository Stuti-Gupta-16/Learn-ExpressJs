//models handles the data here 
// here we handle the file having data in it 
const path=require('path');
const fs=require('fs');
const { register } = require('module');
//both of these are required for writting in the file
const rootDir=path.dirname(require.main.filename);
const homeDataPath=path.join(rootDir,"data","homes.json");
// const register=[];
//we will make it let as below we are declaring it 
// let register=[];
//now as we are handling the data directly in the file we dont need this array 
module.exports=class Home{
    constructor(houseName, price, location, rating , photoUrl){
        //here to make the storage part easier we are creating a proper object 
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.photoUrl=photoUrl;
    }
    save(){
        //now as register is removed we can do something else 
        // register.push(this);
        // //now to store the data in the file
        // const data=path.join(rootDir,"data",'homes.json');
        // fs.writeFile(data, JSON.stringify(register ),err=>{
        //     console.log(err);//if we aredoing this the website wont show data in the user portal
        //     //also even after adding configuration ofthe nodemon we need to update the fetch command as here now if we reload the server the things are flushed as we are using register to fetch the data 
            
        // });
        this.id=Math.random();//to assign random id
        Home.fetchAll((register) => {
          register.push(this);
          const data = path.join(rootDir, "data", "homes.json");
          fs.writeFile(data, JSON.stringify(register), (err) => {
            console.log(err); 
          });
        });

    }//this is a function that adds the data ;
    static fetchAll(callback){
        
        //  const fileContent=fs.readFile(data,(err,data)=>{
        //     if(err){
        //         register= [];
        //     }
        //     register=JSON.parse(data);

        //     // return register;
        //     callback(register);
        fs.readFile(homeDataPath,(err,data)=>{
            console.log("file read",err,data);
            if(!err){
                // registeredHome=JSON.parse(data);
                callback(JSON.parse(data));
            }
            // callback(registeredHome); now as this is not defined we can direct;y call it
            else callback([]);
        })
         }
         //return register
         //this wont be able to be read by the html file as this function is async and error will be there as the data passed will be undefined to make it proper we need a call back function and when the work of fetching data is done we call the callback
        
         //now we need a new method which finds data by id 
         static findById(homeId,callback){
            this.fetchAll(homes=>{
                //this is a method for comparing the id
                const found=homes.find(home=> home.id==homeId);
                callback(found);
            })
         }
    }//this helps in fetching the data without creating an object as we know that we are not creating an individual object
