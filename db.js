const mongoose = require('mongoose');

const dotenv = require('dotenv');
const config = require('./utils/config');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.mongoURI);
        console.log(`MongoDB Connected`);
    }
    catch (error) {
        console.error(`MongoDB connection failed : ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;