const mongoose = require("mongoose");

const { Schema } = mongoose;


const blogSchema = new Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    photopath: { type: String, require: true },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" }
},
    { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema, 'blogs');