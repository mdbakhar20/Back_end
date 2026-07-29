const express = require ("express");


const app = express()

app.get("/menu", (request,response)=>{
    console.log("get request is recived")
    response.json({resName : "pista house"})
})

app.push("/menu", (request,response)=>{
    console.log("menu added sucessfully")
    response.json({message : "menu added sucessfully"})
})

app.put("/menu", (request,response)=>{
    console.log( "menu updated sucessfully")
    response.json({message : "menu updated sucessfully"})
})

app.delete("/menu", (request,response)=>{
    console.log("menu deleted sucessfully")
    response.json({message : "menu deleted sucessfully"})
})

app.listen("8080",()=>{
    console.log("server is listening at server 8080")
})