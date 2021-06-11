const mongoose = require("mongoose")
const {Schema} = mongoose

const ansSchema = new Schema ({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    answers:[
        {
            type:String,
            required:true
        }
    ],
    sender:{
        type:String,
        required:true
    }
})

const Answer = mongoose.model("Answer", ansSchema)

module.exports = Answer