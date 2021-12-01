const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description: String,
        city: String,
        state: String,
        address: String,
        rating: String,
        email: {
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        capacity: Number,
        category: mongoose.Schema.Types.ObjectId
    }
);

const Company = mongoose.model('Company', companySchema);

module.exports = {
    Company
};