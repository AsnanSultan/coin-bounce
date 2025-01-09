const express = require(`express`);
const dbConnect = require("./database/index.js");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler.js");
const cookieParser=require("cookie-parser");


const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(router);

dbConnect();
// app.get("/",(req,res)=>res.json({"mesg":"Hellwo World!"}));


app.use(errorHandler);
app.listen(3000, console.log(`Server is running on port ${3000}`));