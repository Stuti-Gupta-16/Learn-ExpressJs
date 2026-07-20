const { getdb } = require("../util/database");
const { ObjectId } = require("mongodb");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    const db = getdb();
    return db.collection("homes").insertOne(this);
  }

  update(id) {
    this._id = id;
    const db = getdb();

    return db.collection("homes").updateOne(
      { _id: new ObjectId(this._id) },
      {
        $set: {
          houseName: this.houseName,
          price: this.price,
          location: this.location,
          rating: this.rating,
          photoUrl: this.photoUrl,
          description: this.description,
        },
      },
    );
  }
  static fetchAll() {
    const db = getdb();
    return db.collection("homes").find().toArray();
  }
  static findById(id) {
    const db = getdb();
    console.log(id);
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(id)) })
      .next();
  }
  static deleteById(id) {
    const db = getdb();
    return db.collection("homes").deleteOne({ _id: new ObjectId(String(id)) });
  }
};
