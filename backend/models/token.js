const mongoose = require("mongoose");


const refreshTokenSchema = new mongoose.Schema({
    token: { type: String, require: true },
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "users" }
},
    { timestamps: true }


);

module.exports = mongoose.model("RefreshToken", refreshTokenSchema, "tokens");