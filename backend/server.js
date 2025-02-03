const express = require(`express`);
const dbConnect = require("./database/index.js");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler.js");
const cookieParser=require("cookie-parser");
// const http=require('http')
const cors=require('cors');

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,

}


const app = express();

app.use(cookieParser());

app.use(cors(corsOptions));
app.use(express.json());

app.use(router);

dbConnect();
// app.get("/",(req,res)=>res.json({"mesg":"Hellwo World!"}));
app.use('/storage',express.static('storage'));
app.use(errorHandler);
app.listen(3001,()=> {console.log(`Server is running on port ${3001}`);


// var options = {
//     port: 3000,
//     host: '127.0.0.1',
//   };
// var request = http.request(options);
// request.setHeader('content-type', "multipart/form-data");
// request.end();
});
