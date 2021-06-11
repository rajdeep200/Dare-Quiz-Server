const express = require("express")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRouter")
const questionRoutes = require("./routes/questionRoutes")
const ansRoutes = require("./routes/ansRouter")
const app = express()
require("dotenv").config()
app.use(express.json())

connectDB()

app.get("/", (req,res) => {
    res.send("Welcome")
})
app.use("/users", userRoutes)
app.use("/questions", questionRoutes)
app.use("/answers", ansRoutes)
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`app is running on ${port}`)
})