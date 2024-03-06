const Todo = require("../model/todosModel");

// getAllTodo
const getAllTodo = async (req, res) => {
  try {
    const todoData = await Todo.find();
    res.status(200).json(todoData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getSingleTodo
const getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const todoData = await Todo.findOne({ _id: id });
    res.status(200).json(todoData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// createTodo
const createTodo = async (req, res) => {
  try {
    const { name, email, roll } = req.body;
    const newTodo = new Todo({
      name,
      email,
      roll,
    });
    const todoData = await newTodo.save();
    res.status(200).json(todoData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// updateTodo
const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todoData = await Todo.findByIdAndUpdate({ _id: id });
    todoData.id = req.body.id;
    todoData.name = req.body.name;
    todoData.email = req.body.email;
    todoData.roll = req.body.roll;
    await todoData.save();
    res.status(200).json({ message: "update successfull", data: todoData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// deteleTodo
const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todoData = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json(todoData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
