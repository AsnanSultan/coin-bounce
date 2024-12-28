const express=require(`express`);
const dbConnect=require("./database/index.js");
const {PORT}=require("./config/index");
// const router=require("./routes/index.js");

const app=express();


dbConnect();
app.get("/",(req,res)=>res.json({"mesg":"Hellwo World!"}));
app.listen(PORT,console.log(`Server is running on port ${PORT}`));