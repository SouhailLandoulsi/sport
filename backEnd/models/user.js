const mongoose=require("mongoose")

// creat user schema

const userSchema =mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    tel: String,
    role:String,
    avatar : String
})

// creat user model
const User = mongoose.model("User", userSchema)

// make user exportable
module.exports = User;