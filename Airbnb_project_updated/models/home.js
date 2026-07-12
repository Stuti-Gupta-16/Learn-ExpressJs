//models handles the data here 
// here we handle the file having data in it 
const register=[];
module.export=class Home{
    constructor(houseName, price, location, rating , photoUrl){
        //here to make the storage part easier we are creating a proper object 
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.photoUrl=photoUrl;
    }
    save(){
        register.push(this);
    }//this is a function that adds the data ;
    static fetchAll(){
        return register;
    }//this helps in fetching the data without creating an object as we know that we are not creating an individual object

}