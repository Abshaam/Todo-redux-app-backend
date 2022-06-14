const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UniqueObjectId = new Schema({
    _id: {
        type: String,
        default: function () {
            return new ObjectId().toString()
        }
    }
})


const TodoSchema = new Schema({

    text:{
        type: String
    },

    isCompleted: {
        type: String,
        default: false
    },

}, {timestamps: true})


TodoSchema.add(UniqueObjectId)
const Todo = mongoose.model('Todo', TodoSchema)

module.exports = {
    Todo
}