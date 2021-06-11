const mongoose = require("mongoose")
const dotenv = require("dotenv");
const Question = require("./models/questionModel")
const questions = require("./data/questions")
const connectDB = require("./config/db")

dotenv.config();
connectDB()

const importData = async () => {
    try {
        const questionList = await Question.insertMany(questions)
        console.log("inserted successfully")
    } catch (error) {
        console.log(error)
    }
}

importData()