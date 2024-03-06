const express = require('express');
const cors = require('cors');
require('./config/db')
const todoRoutes = require('./routes/todosRoute');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(todoRoutes)

app.get('/', (req, res)=>{
    res.send("This is home route")
})




module.exports = app;