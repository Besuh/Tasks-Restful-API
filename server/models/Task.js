let mongoose = require("mongoose");
let Task = mongoose.model("Task",new mongoose.Schema({
    title:{type:String,require:true,minlength:1,maxlength:255},
    description:{type:String,default:"",maxlength:255},
    completed:{type:Boolean,default:false}},
    {timestamps:true}));