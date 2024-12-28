const mongoose=require("mongoose");

const {Schema}=mongoose;


const commentSchema=new Schema({
comment:{type:String,require:true},
author:{type:mongoose.SchemaTypes.ObjectId,ref:"users"},
blog:{type:mongoose.SchemaTypes.ObjectId,ref:"blogs"},
},{
    timeseries:true
});

module.exports=mongoose.model("Comment",commentSchema,"comments");