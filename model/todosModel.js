const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    id : {
        type : Number

    },
    name : {
        type : String
    },
    email : {
        type : String
    },
    roll : {
        type : Number
    },
    createdOn : {
        type : Date,
        default : Date.now
    }


})

module.exports = mongoose.model("todo", todoSchema)