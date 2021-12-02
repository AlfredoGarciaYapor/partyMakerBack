const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            index: true
        },
        lastName:{
            type: String,
            required: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            index: true,
            unique: true 
        },
        password:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            index: true
        },
        city: {
            type: String,
            index: true
        },
        state: {
            type: String,
            index: true
        },
        address: {
            type: String,
            index: true
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};