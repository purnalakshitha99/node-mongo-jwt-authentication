const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["user","admin","manager"]
    },
    contact_number:{
        type:String,
    },
    address:{
        type:String,

    },
    birth_date:{
        type:Date,
    },
})


module.exports = mongoose.model("User", userSchema);