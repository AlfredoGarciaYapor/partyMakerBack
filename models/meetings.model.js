const mongoose = require('mongoose');

const meetingsSchema = new mongoose.Schema(
    {
        date:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        },
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            required:true
        },
        pack:{
            type:mongoose.Schema.Types.ObjectId,
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
