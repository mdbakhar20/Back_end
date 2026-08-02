const express = require ("express");
const cors = require("cors")
const jwt = require("jsonwebtoken")

const JWT_SECTET = "its no secret";

const users = [];

const app = express()

app.use(express.json())
app.use(cors())

function AuthMiddleWare(req,res,next) {
    const {token} = req.headers;
    
    let foundUserName = null;

    foundUserName = jwt.verify(token, JWT_SECTET);

    if(foundUserName){
        req.username = foundUserName;
        next()
    }else{
        res.json({
            "msg":"you are not allow to see protected data"
        })
    }


}

app.post("/SignUp",(req,res) =>{

    const {username, email, password} = req.body;

    const userObj = {
        username,
        email, 
        password
    }

    users.push(userObj)
    console.log(users)

    res.json({
        "msg":"you are sucessfully login",
        "data" :userObj
    })
})

app.post("/SignIn",(req,res)=>{
    const {email, password} = req.body;

    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
        const token = jwt.sign({username: foundUser.username}, JWT_SECTET);

        res.json({
            "msg":"login sucessfully",
            token: token
        });
    } else {
        res.json({
            "msg":"login failed"
        });
    }
})

app.use(AuthMiddleWare)

app.get("/me",(req,res)=>{

    const payload = req.username;
    console.log(payload)

    const userDetail = users.filter((userObj)=>{
        if (userObj.username == payload.username) {
            return true
        } else {
            return false
        }
    })


    res.json({
        "data":userDetail
    })
})

app.listen("8080",()=>{
    console.log("server is listining at port 8080")
})