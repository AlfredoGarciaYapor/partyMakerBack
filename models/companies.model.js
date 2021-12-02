const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            index: true,
            unique: true 
        },
        description: String,
        city: String,
        phone:String,
        state: String,
        address: String,
        rating: String,
        email: {
            type: String,
            required: true,
            index: true,
            unique: true 
        },
        password:{
            type: String,
            required: true
        },
        capacity: String,
        category: mongoose.Schema.Types.ObjectId
    }
);

const Company = mongoose.model('Company', companySchema);

module.exports = {
    Company
};