var express = require('express'); //load plugin express - is check exist
var router = express.Router();
var app = express();

var userCollection = require('../model/userdata'); //require data

router.route('/CreateUser').post(createUser);
router.route('/UpdateUser').post(UpdateUser);
router.route('/GetUser').post(GetUser);

async function createUser(req, res)
{
    await userCollection.create({username: req.body.username, pass: req.body.pass});
    res.send("Create user ok: " + req.body.username);
}
async function UpdateUser(req, res)
{
    // tim du lieu de cap nhat
    const user = await userCollection.findOne({'username': req.body.username});
    
    if(user)
    { 
        user.age = req.body.age;
        user.save(user);
        res.status(200).send("Update age ok");
    }else{
        res.status(400).send("Update age false");
    }
}
async function GetUser(req, res)
{
    var username = req.header("username");
    const user = await userCollection.findOne({"username": username});
    if(user)
    { 
        //res.status(200).send(user);
        res.status(200).json(user);
    }else{
        res.status(400).send("User name not found");
    }
}
module.exports = router;