var express = require("express"); //load plugin express - is check exist
var app = express();
app.listen(5000, ()=>{

});

//connection
var mongoose = require('mongoose');
var url ="mongodb://localhost/k12020";
let option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(url, option).then(()=>{console.log("thanh cong")}, ()=>{console.log("that bai")});

//schema
const userInfo = new mongoose.Schema(
    {
        username: String,
        pass: String
    },
    {
        collection: "userData"
    }
);
// const userInfo = new mongoose.Schema();

//model
 const userInfoModel = mongoose.model('userData', userInfo, 'userData');

//query
userInfoModel.findOne(function(err, result){
    console.log("result: "+ result.pass);
});
