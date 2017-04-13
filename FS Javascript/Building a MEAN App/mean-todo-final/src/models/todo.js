'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed

var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;
