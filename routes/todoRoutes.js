const express = require('express');
const {addTodo, fetchTodos, deleteTodo, updateTodo, fetchATodo}= require('../controller/todoController')
const router = express.Router();




// adding a todo
router.post('/add', addTodo)

// fetching all todos
router.get('/delay-fetch', fetchTodos)

// deletes a todo
router.delete('/delete/:id', deleteTodo)

// updates a todo
router.put('/update/:id', updateTodo)

// fetches a single todo
router.get('/:id', fetchATodo)


module.exports= router
   