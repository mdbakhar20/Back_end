const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config()
const jwt = require("jsonwebtoken")
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const {TodoModel , UserModel} = require("./utils/db");



mongoose.connect(process.env.DATABASE_URL)

  .then(() => console.log("connection successful"))
  .catch((err) => console.log("connection failed:", err));
  
const App = express();

App.use(express.json());

App.post("/SignUp",async(req,res)=>{
    const {username ,email ,password} = req.body;

    // save to db
    const feedBack =await UserModel.create({
        username ,
        email ,
        password
    });

    res.json({
        "msg":"users register sucessfully",
        feedBack,
    })
})

App.post("/SignIn",async(req,res)=> {
    const {email,password} = req.body;

    const response = await UserModel.findOne({
        email,
        password
    })

    if (response) {
        const token = jwt.sign({email : response.email}, process.env.JWT_SECRET)
         res.json({
        "msg":"login sucessfully",
        "token":token
    }) 
    } else {
         res.json({
            msg : "invalid credentials"
         })
    }
  
})

App.get("/users", async (req, res)=>{

    const userData = await UserModel.find({});
    console.log(userData)

    res.json({
        data: userData
    })
})

App.listen("8080",()=>{
console.log("server is listening at port 8080")
})