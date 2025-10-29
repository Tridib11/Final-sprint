const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ksun8sc.mongodb.net/todo-testing"
  )
  .then(() => {
    console.log("DB connected");
  });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
