
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    complete: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;  