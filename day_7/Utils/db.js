const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const UserSchema = new Schema({
//     username : String,
//     email : String,
//     password : String
// })

// const todoSchema = new Schema({
//     title : String,
//     description : String,
//     isDone : Boolean,
//     userId: ObjectId,
// })

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

const TodoSchema = new Schema({
  title: String,
  description: String,
  isDone: Boolean,
  userId: ObjectId,
});

const TodoModel = mongoose.model("todos",TodoSchema);
const UserModel = mongoose.model("users",UserSchema);

module.exports = {
    TodoModel,
    UserModel
} 