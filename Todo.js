// backend/models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }); // This adds createdAt and updatedAt fields

module.exports = mongoose.model('Todo', TodoSchema);