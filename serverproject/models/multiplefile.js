const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]
    ,detail:{
        type: String
    }
    ,category:{
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('MultipleFile', mulitipleFileSchema);