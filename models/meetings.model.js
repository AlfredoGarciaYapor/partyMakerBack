const mongoose = require('mongoose');

const meetingsSchema = new mongoose.Schema(
    {
        date:{
            type:String,
            required:true
        },
        user:{
            type:String,
            ref: 'User',
            required:true
        },
        company:{
            type:String,
            ref: 'Company',
            required:true
        },
        pack:{
            type:String,
            ref: 'Pack',
            required:true
        },
        hour:{
            type:String,
            required:true
        }
    }
)

const Meeting = mongoose.model('Meeting', meetingsSchema);

module.exports = {
    Meeting
};
