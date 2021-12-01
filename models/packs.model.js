const mongoose = require('mongoose');

const packsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        description:{
            type:String,
            required:true
        },
        cost:{
            type:Number,
            required: true
        },
        companyId:{
            type:mongoose.Schema.Types.ObjectId,
            required: true
        }
    }
);

const Pack = mongoose.model('Pack', packsSchema);

module.exports = {
    Pack
};


