const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  res.json(db.todos);
});

router.post("/", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  const mainTodo = req.body;
  newTodo.id = db.todos.length + 1;
  db.todos.push(mainTodo);
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.json([newTodo]);
});

router.put("/:id", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  const todoIds = parseInt(req.params.id);
  const todoToUpdate = db.todos.find((todo) => todo.id === todoIds);
  if (!todoToUpdate) {
    res.status(400).send("Invalid argument");
    return;
  }


  Object.assign(todoToUpdate, req.body);
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.json([todoToUpdate]);
});

router.delete("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  const todoId = parseInt(req.params.id);
  const index = data.todos.findIndex((todo) => todo.id === todoId);
  if (index === -1) {
    res.status(400).send("Invalid argument");
    return;
  }
  data.todos.splice(index, 1);
  fs.writeFileSync("db.json", JSON.stringify(data));
  res.json([undefined]);
});






// module.exports = router;
module.exports = router;