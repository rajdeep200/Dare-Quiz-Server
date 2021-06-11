const asyncHandler = require("express-async-handler")
const Question = require("../models/questionModel")
const User = require("../models/userModel")

const getQuestions = asyncHandler (async (req,res) => {
    const questions = await Question.find({})
    res.json(questions)
})

const getCreator = asyncHandler (async (req,res) => {
    const user = await User.findOne({userID:req.params.id})
    res.json(user.name)
})

module.exports = {getQuestions,getCreator}