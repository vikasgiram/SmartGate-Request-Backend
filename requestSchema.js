const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 3,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    organization: {
        type: String,
        required: true,
        maxlength: 50,
    },
    phone: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 10,
        match: /^\+?[1-9][0-9]{7,14}$/
    },
    message: {
        type: String,
        required: true,
        maxlength: 500,
        minlength: 10,
    },
    offerings: [{
        type: String,
        required: true,
        enum: ['Ai-based Video Analytics','Identity-based People Flow', 'Mobile/Face-based Access Control', 'Visitor management'],
    }],
    
},{timestamps: true});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;