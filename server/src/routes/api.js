const express = require('express');
const {createUser,handleLogin,getUser} = require('../controllers/userController')
const routerAPI = express.Router();
const auth = require("../middleware/auth");

routerAPI.all("*",auth)
routerAPI.get("/", (req,res) => {
    return res.status(200).json("hello world with api")
})

routerAPI.post("/register",createUser)
routerAPI.post("/login",handleLogin)
module.exports = routerAPI; //export default