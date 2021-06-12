const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Answer = require("../models/answerModel")
const generateToken = require("../utils/generateToken");

const createUser = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const userID =
    name.toString().slice(0, 3).replace(/\s/g, "") +
    Math.random().toString().slice(2, 8);
  const password = Math.random().toString(36).slice(2, 10);

  const user = await User.create({ name, userID, password });
  if (user) {
    res.json({
      id: user._id,
      userID: user.userID,
      name: user.name,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    res.json("Invalid user Details");
  }
});

// use this data for login verification
// "name": "Jordi Alba",
// "user ID": "Jor042147"
// "password": "39cn4vfr",

const loginUser = asyncHandler(async (req, res) => {
    const { userID, password } = req.body;
    const user = await User.findOne({ userID: userID });
    if(user && (password === user.password)){
        res.json({
            id: user._id,
            userID: user.userID,
            name: user.name,
            password: user.password,
            token: generateToken(user._id)
        })
    }else{
        res.status(401).json({message:"Login Failed"})
    }
  
});

const deleteUserAccount = asyncHandler (async (req,res) => {
  const user = await User.findOne({ userID: req.params.id });
  if(user){
    const deletedUser = await User.findOneAndDelete({ userID: user.userID })
    const userAnswers = await Answer.deleteMany({ user: user._id })
    res.json({message: "Your account deleted successfully"})
  }else{
    res.status(401).json({message:"Failed to delete"})
  }
})

module.exports = { createUser, loginUser, deleteUserAccount };
