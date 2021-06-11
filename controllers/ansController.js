const asyncHandler = require("express-async-handler")
const Answer = require("../models/answerModel")
const User = require("../models/userModel")

const saveAnswer = asyncHandler (async (req,res) => {
    const {answers,sender,userID} = req.body
    const user = await User.findOne({userID})
    const answer = new Answer({
        user: user._id,
        answers,
        sender
    })

    const savedAnswer = await answer.save()
    res.status(200).json(savedAnswer)
})

const getAnswer = asyncHandler (async (req,res) => {
    const user = await User.findOne({userID: req.params.id})
    console.log(user)
    const answers = await Answer.find({user: user._id})
    if(answers){
        res.json(answers)
    }else{
        res.status(400).json({message:"You don't have an answer"})
    }
})

module.exports = {saveAnswer,getAnswer}