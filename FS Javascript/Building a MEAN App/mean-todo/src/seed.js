'use strict';

const Todo = require('./models/todo.js');

const todos = [
    'Feed the dog',
    'Walk the kids',
    'Water the trees',
    'Buy a house',
    'Eat a sammich'
];

todos.forEach(function(todo, index) {
    Todo.find({'name': todo}, function(err, todos) {
        if(!err && !todos.length) {
            Todo.create({completed: false, name: todo});
        };
    });
});