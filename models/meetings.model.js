const mongoose = require('mongoose');

const meetingsSchema = new mongoose.Schema(
    {
        date:{
            type:String,
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        packId:{
            type:mongoose.Schema.Types.ObjectId,
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
