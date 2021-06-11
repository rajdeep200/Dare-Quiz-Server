const express = require("express")
const router = express.Router()
const {getQuestions,getCreator} = require("../controllers/questionController")

router.get("/",getQuestions)
router.get("/:id",getCreator)

module.exports = router