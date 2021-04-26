var express = require('express');
var router = express.Router();

//=== GET
//req: request la du lieu nhan duoc duoi client
//res: du lieu tra ve duoi client
router.get('/Mess', (req, res)=>{
    res.send("Hello world");
});

//=== POST
router.post('/PostAge', (req, res)=>{
    var age = req.body.age;
    console.log("Age: "+ age);
    res.send("Age: "+ age);

});

module.exports = router;