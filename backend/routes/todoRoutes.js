const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

router.post("/add", async (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  await todo.save();
  res.send(todo);
});

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

module.exports = router;