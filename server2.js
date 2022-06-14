const express = require('express');
const cors = require('cors')
const { uuid } = require('uuidv4');
const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use (cors());


// assigning a variable to all todos or tasks
let tasks = []

// controller for getting all todos
app.get('/fetch', ( req, res) => {

    // this should print out all task
    res.status(200).json(tasks);
})

// controller for getting all todos
app.get('/delay-fetch', ( req, res) => {

    // this should print out all task

    setTimeout(() => {
    res.status(200).json(tasks)
    },6000);
})


// controller for adding a todo
app.post('/add', async (req, res) => {

    // assigs a variable the the text that will be entered in the input field
    const { text } = req.body;

    // run this when a text is entered
    if (text) {
        const newTodo = {
            id: uuid(),
            text,
            isCompleted: false  
        }

        // add the newTRodo to the tasks with the empty array
        tasks.push(newTodo)
        res.status(200).json(newTodo);

    // run this if input field is empty
    } else{
        res.status(400).json({msg: 'Text field must hav a text in it'})
    }
})
   


// controller for deleting a todo
app.delete('/delete/:id', async (req, res) =>{

    // denotes the id of the todo grabbed
    const {id} = req.params;

    // this finds a match of the id grabbed with a task id in the database
    const findMatch = tasks.find(task => task.id === id );

    // this returns a new array which does not have the id that has being grabbed thereby deleted
    tasks = tasks.filter(task => task.id !== id);
    
    // log this when a todo with similar id is found
    res.status(200).json(findMatch)
   
})

// controller for updating a todo
app.put('/update/:id', (req, res) =>{

    // denotes the id of the todo grabbed
    const {id} = req.params;

    // maps through every task and run the function which changes the isCompleted to not completed
    tasks = tasks.map(task => {
        return task.id === id ? {...task, isCompleted: !task.isCompleted} : {...task} 
    });

    // this finds the todo with id which matches with th id grabbed
    const findMatch = tasks.find(task => task.id === id)
    
    // run this when you find a match
    res.status(200).json(findMatch);

       
   
})

app.listen(PORT, () => {
    console.log(`server running smooth on port ${PORT}`);
})
