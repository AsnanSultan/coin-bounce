const express=require("express");

const router=express.Router();

//testing
router.get("/test",(req,res)=>res.json({"msg":"Working"}));



module.exports=router;