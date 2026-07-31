const express = require("express")

const app = express()

let todoArr = ["go to collage"];

function updateTodo(oldTodo , newTodo) {
        let index;
        let filterArr = todoArr.filter((todo, index) =>{
        if (todo === oldTodo) {
            index = index;
            return false
        } else {
            return true
        }
    })
    filterArr.splice(index,0,newTodo)

    todoArr = filterArr;
}

// extract json from body and parse in original js object
app.use(express.json())

app.get("/todo",(req,res)=> {

    console.log("get request recived")
    res.json({
        data:todoArr
    })
});

app.post("/todo",(req,res)=>{
    const {todo} = req.body;
    todoArr.push(todo)

    console.log(todoArr)
    res.json({
        message : "todo recived and added sucessfully"
    })
})

app.put("/todo",(req,res)=>{
    const {oldTodo,newTodo} = req.body;

    updateTodo(oldTodo,newTodo)

    console.log(todoArr);

    res.json({
        "msg": "todo updated sucessfully"
    })
})


app.delete("/todo", (req, res)=>{
    const {todo} = req.body;

    todoArr = todoArr.filter((elem)=>{
        if(elem == todo) {
            return false
        } else {
            return true
        }
    })

    res.json({
        "msg": "todo deleted successfully"
    })

})

app.listen("8080",()=>{
    console.log("server is listening at 8080")
})