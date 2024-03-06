const express = require('express');
const { getAllTodo, createTodo, getSingleTodo, updateTodo, deleteTodo } = require('../controller/todosController');
const router = express.Router();

router.get("/todos", getAllTodo);
router.get("/todos/:id", getSingleTodo);
router.post("/todo", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo)


module.exports = router;