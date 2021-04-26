var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userDataSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        }, 
        pass: {
            type: String,
            required: true
        }, 
        age: {
            type: Number,
            required: false
        }
    }
)
module.exports = mongoose.model('userdata', userDataSchema,'userdata');