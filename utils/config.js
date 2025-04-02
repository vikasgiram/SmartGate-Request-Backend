// config.js

const config = {
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://vikigiram:NYMbsTrqJseeIV6G@cluster0.bb7ax3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    email: process.env.EMAIL || 'no-reply-project@daccess.co.in',
    emailAppPassword: process.env.EMAIL_APP_PASSWORD || 'Dsspl@2025'
};

module.exports = config;