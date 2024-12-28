const mongoose=require("mongoose");

const {Schema}=mongoose;


const userSchema=new Schema({
    username:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
},{
    timestamps:true
});


module.exports=mongoose.model("User",userSchema,"users");