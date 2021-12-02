const mongoose = require('mongoose');
// const { Company } = require('./companies.model')

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
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            required: true
        }
    }
);

const Pack = mongoose.model('Pack', packsSchema);

module.exports = {
    Pack
};


