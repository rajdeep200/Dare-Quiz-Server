const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    userID:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

userSchema.methods.matchPasswords = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

// userSchema.pre("save", async function(){
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model("User", userSchema)
module.exports = User