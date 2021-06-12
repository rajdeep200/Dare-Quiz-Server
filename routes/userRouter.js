const express = require("express")
const router = express.Router()
const {createUser, loginUser, deleteUserAccount} = require("../controllers/userController")
const userAuthorization = require("../middlewares/userAuth")

router.post("/", createUser)
router.post("/login", loginUser)
router.route("/:id").delete(userAuthorization, deleteUserAccount)


module.exports = router