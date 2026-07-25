const fs = require("fs");
const path = require("path");
const {program} = require("commander");

const filePath = path.join(__dirname, "todo.json");

const printTodo = () => {
    const data = fs.readFileSync(filePath,"utf8");
    console.log(data);
}

const addtodo =(new_todo) =>{
    const data = fs.readFileSync(filePath,"utf8");
    const todoArr = JSON.parse(data);

    todoArr.push(new_todo);

    fs.writeFileSync(filePath,JSON.stringify(todoArr),"utf8");
    console.log("Todo added sucessfully ", new_todo);
}

const updateTodo = (existing_todo,new_todo) =>{
    const data = fs.readFileSync(filePath,"utf8");
    const todoArr = JSON.parse(data);

    let deletedElementIndex = 0;

    const filteredTodo = todoArr.filter((todo, index) =>{
        if (todo.toLowerCase() == existing_todo.toLowerCase()) {
            deletedElementIndex = index;
            return false;
        } else {
            return true;
        }
    });
    filteredTodo.splice(deletedElementIndex,0 , new_todo);

    fs.writeFileSync(filePath, JSON.stringify(filteredTodo),"utf8")
    console.log("Todo updated from", existing_todo, "to", new_todo)
}

const deleteTodo = (todo_value) => {
    const data= fs.readFileSync(filePath, "utf8");
  const todoArr = JSON.parse(data);

  const filteredTodo = todoArr.filter((todo) => {
    if (todo.toLowerCase() == todo_value.toLowerCase()) {
      return false;
    } else {
      return true;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(filteredTodo), "utf8");
  console.log("Todo Deleted Successfully", todo_value);
};

program
.name("Todo CLI")
.description("CLI based persistent todo application")
.version("1.0.0");

program
.command("print")
.description("print all todos from todo list")
.action(()=>{
    printTodo()
});

program
.command("add")
.description("To add new todo to the todo list")
.argument("<new_todo>","argument to get new todo value from user")
.action((new_todo)=>{
    addtodo(new_todo)
});

program
.command("delete")
.description("Delete the existing todo from the todo list")
.argument("<todo_value>","argument to store delete value from CLI")
.action((todo_value)=>{
    deleteTodo(todo_value)
});

program
.command("update")
  .description("update an existing todo from the todo list")
  .argument("<existing_todo>", "add existing todo")
  .argument("<new_todo>", "add new todo")
  .action((existing_todo, new_todo) => {
    updateTodo(existing_todo, new_todo);
  });

program.parse();
