const mongo=require('mongodb');
const MongoClient= mongo.MongoClient;
const url = "mongodb+srv://stutig926_db_user:LCQ7aZFtAJ4b5kqy@cluster0.9okj2fp.mongodb.net/?appName=Cluster0";
let _db;
const mconnect=(callback)=>{
  MongoClient.connect(url).then((client)=>{
    // console.log(client)
    console.log("connected To mongodb");
    _db=client.db("airbnb");//database name
    callback(client);
  }).catch((err)=>{
    console.log(err);
  })
}

const getdb=()=>{
  if(!_db) throw new Error('Mongo not connected');
  return _db;
}
exports.mconnect=mconnect;
exports.getdb=getdb;