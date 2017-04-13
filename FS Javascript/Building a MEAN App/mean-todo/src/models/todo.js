'use strict';

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

const model = mongoose.model('Todo', todoSchema);

module.exports = model;