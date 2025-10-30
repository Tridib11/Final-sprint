const express = require("express");
const router = express.Router();
const Todo = require("../models/todoModel");
const { todoSchema } = require("../types");

router.post("/", async (req, res) => {
  try {
    const parsed = todoSchema.parse(req.body);
    console.log(parsed)
    const todo = await Todo.create(parsed);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );

    res.status(200).json({
      msg:"Todo marked as completed"
    })
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
