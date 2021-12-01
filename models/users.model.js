const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        phone: String,
        city: String,
        state: String,
        address: String
    }
);

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};