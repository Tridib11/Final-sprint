const Todo = require("./models/todoModel");

console.log(
  "Todo is",
  Todo && Todo.modelName ? `Mongoose model ${Todo.modelName}` : typeof Todo
);
console.log("typeof Todo.create =", typeof Todo.create);
console.log("typeof Todo.find =", typeof Todo.find);
