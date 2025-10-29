const express = require("express");
const cors=require("cors")
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


app.use(cors())

app.use(express.json());

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const parsedPayload = createTodo.safeParse(payload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You have entered wrong inputs",
    });
  }

  await todo.create({
    title: payload.title,
    description: payload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "Sorry wrong inputs",
    });
  }

  await todo.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
