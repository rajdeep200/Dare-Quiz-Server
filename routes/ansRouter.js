const express = require("express")
const router = express.Router()
const {saveAnswer, getAnswer} = require("../controllers/ansController")
const userAuthorization = require("../middlewares/userAuth")

router.post("/", saveAnswer)
router.route("/:id").get(userAuthorization,getAnswer)

module.exports = router