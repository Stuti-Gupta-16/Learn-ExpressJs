const path = require("path");
const fs = require("fs");

const rootDir = path.dirname(require.main.filename);
const favDataPath = path.join(rootDir, "data", "fav.json");

module.exports = class Favourite {
    static add(id,callback){
        Favourite.getFile((favourite)=>{
            //now we need to check wheather the data is already added or not
            if(favourite.includes(id)){
                console.log("This is already added");
                callback();
            }
            else{
        
                favourite.push(parseInt(id));//added the id in the list
                fs.writeFile(favDataPath,JSON.stringify(favourite),callback);
                }
            }
        )
    };
    static getFile(callback){
         fs.readFile(favDataPath, (err, data) => {
           if (!err) {
             callback(JSON.parse(data));
           } else {
             callback([]);
           }
         });
    }

};
