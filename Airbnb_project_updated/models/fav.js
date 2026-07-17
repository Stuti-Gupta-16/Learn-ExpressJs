const path = require("path");
const fs = require("fs");
const { deleteById } = require("./home");

const rootDir = path.dirname(require.main.filename);
const favDataPath = path.join(rootDir, "data", "fav.json");

module.exports = class Favourite {
  static add(id, callback) {
    id = Number(id); // Convert to number before checking

    Favourite.getFile((favourite) => {
      // Check whether the ID already exists
      if (favourite.includes(id)) {
        console.log("This is already added");
        return callback();
      }

      favourite.push(id);

      fs.writeFile(favDataPath, JSON.stringify(favourite), callback);
    });
  }

  static getFile(callback) {
    fs.readFile(favDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static deleteById(id, callback) {
    id = Number(id);

    this.getFile((favourite) => {
      favourite = favourite.filter((fav) => fav !== id);

      fs.writeFile(favDataPath, JSON.stringify(favourite), callback);
    });
  }
};
