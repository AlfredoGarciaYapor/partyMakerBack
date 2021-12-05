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
            type:String,
            required: true
        },
        company:{
            type:String,
            ref: 'Company',
            required: true
        }
    }
);

const Pack = mongoose.model('Pack', packsSchema);

module.exports = {
    Pack
};


