const mongoose = require("mongoose");

const Schema = mongoose.Schema;


module.exports = mongoose.model("Voitures",new Schema({
    image : {type:String,required:true},
    title : {type:String,required:true},
    description : {type:String,required:true},
    prix : {type:String,required:true},
})) 