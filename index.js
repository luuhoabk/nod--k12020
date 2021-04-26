var express = require("express"); //load plugin express - is check exist
var app = express();

// Middle Ware
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

//------Connect normal mongo DB Driver---------
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://HoaDB:Abc@123@cluster0.chv6j.mongodb.net/k12020?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("k12020").collection("devices");
//   // perform actions on the collection object
//   console.log("test connect mongo");
//   client.close();
// });
//----------------------------------

//------Connect mongoose DB ----------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
let option = { useNewUrlParser: true, useUnifiedTopology: true };
 //let url = "mongodb://139.59.119.72:27017/k12020"; //get connect with mongo shell
// let url = "mongodb://HoaK12020:pass12345@139.59.119.72:27017/k12020"; //get connect with mongo shell
// let url = "mongodb://root:pass12345@34.93.177.220:27017/admin"; //get connect with mongo shell
let url = "mongodb://104.155.233.51:27017/k12020"; //get connect with mongo shell

//CRUD 
//1. tao model
mongoose.connect(url, option).then(
    ()=>{
        console.log("Connect server mongodb ok");
    },
    ()=>{
        console.log("Connect is false");
    }
);


//------------------------------------

var info = require('./api/info');
app.use('/info', info);
var data = require('./api/dataController');
app.use('/data', data);

// tao server va lang nghe o port bao nhieu
var server = app.listen(5000, () => {
    console.log("Server start.");
});
