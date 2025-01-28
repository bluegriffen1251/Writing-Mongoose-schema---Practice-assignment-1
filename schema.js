const mongoose = require('mongoose');
 
const newuser = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    roles : {
        type:[String],
        default : ['user', 'admin'],
    },
    profile : {
        firstname :{
            type : String,
        },
        lastname :{
            type : String,
        },
        age :{
            type : Number,
        }
    },
    lastlogin :{
        type : Date,
    },


})