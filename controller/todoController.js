// requiring all modules 
const {Todo} = require('../model/todo');


// controller for adding a todo
const addTodo = async (req, res) =>{
   try{ 

    const { text } = req.body;

    const data ={
         text
    }


    const dataStore = new Todo(data)

    const saveData = await dataStore.save();


    res.status(201).json(saveData);
         }catch(error) {
             res.status(500).json(error)
          console.log(error.message)
}  

 };



const fetchTodos = async (req, res) =>{
    try{
    const todos = await Todo.find();
    res.status(200).json(todos);
    }catch (error) {
        console.log(error.message)
    }
}

const fetchATodo = async (req, res) =>{
    try{
    const { id } = req.params
    const text = await Todo.findById(id);
    
    res.status(200).json(text);
    }catch(error){
        console.log(error.message)
    }
}

const deleteTodo = async (req, res) =>{

    try {
    const { id } = req.params
    const text = await Todo.findByIdAndDelete(id)

    res.status(200).json(text)
    }catch(error){
        console.log(error.message)
    }
}

const updateTodo = async (req, res) =>{
    try{
        const { isCompleted } = req.body

        const { id } = req.params

        const update = { isCompleted }

        const text = await Todo.findOneAndUpdate({ _id: id }, update, { new: true });

        res.status(200).json(text);
            console.log(text)
        // res.send(todo)
    }catch(error){
        console.log(error.message)
    }
}


module.exports = {
    addTodo,
    fetchTodos,
    fetchATodo,
    deleteTodo,
    updateTodo,
   
};