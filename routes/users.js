const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejs")

const userschema = mongoose.Schema({
    username: String, 
    name: String, 
    age: Number 
})

module.exports = mongoose.model('Users',userschema)
