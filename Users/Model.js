const mongoose = require("mongoose");

const Schema = mongoose.Schema;


module.exports = mongoose.model("Users",new Schema({
    fullname : {type:String,required:true},
    phonenumber : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    role : {type:String,enum : ["user","admin"],default: "user"}
})) 