const mongoose = require("mongoose");

const { MONGODB_CONNECTION_STRING } = require("../config/index");

const dbConnect = async () => {

    try {

        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (e) {
        console.log(`Error in dbConnect: ${e.message}`);
    }

}

module.exports = dbConnect;