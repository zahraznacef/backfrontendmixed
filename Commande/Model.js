const mongoose = require("mongoose");

const Schema = mongoose.Schema;


module.exports = mongoose.model("Commande",new Schema({
    firstname : {type:String,required:true},
    lastname : {type:String,required:true},
    email : {type:String,required:true},
    phonenumber : {type:String,required:true}, 
    nomvoiture : {type:String,required:true},
    imagevoiture : {type:String,required:true},
    prixvoiture : {type:String,required:true},
})) 

