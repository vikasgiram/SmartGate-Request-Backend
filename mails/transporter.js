const nodemailer = require('nodemailer');
const config = require('../utils/config');

const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true, 
    auth: {
      user: config.email,
      pass: config.emailAppPassword,
    },
});

module.exports = transporter; 

