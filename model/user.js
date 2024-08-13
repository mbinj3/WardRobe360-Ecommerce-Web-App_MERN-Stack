const mongoose = require('../configuration/dbConfig');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
    
});

module.exports = mongoose.model("user", userSchema, 'users');