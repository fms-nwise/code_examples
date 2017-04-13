'use strict';

const express = require('express');
const Todo = require('../models/todo');
//const todos = require('../../mock/todos.json');

const router = express.Router(); //Making the router object

//We prefix with API to not conflict with the routes of files in the public folder
//This is sending a json object instead of html can be used this way with .send or use res.json
router.get('/todos', function(req, res) {
    Todo.find({}, function(err, todos) {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todos: todos});  
    });
});

router.post('/todos', function(req, res) {
    let todo = req.body;
    Todo.create(todo, function(err, todo) {
        if(err) {
            return res.status(500).json({err: err.message});
        }
        res.json({'todo': todo, message: 'Todo Created'});
    })
});

router.put('/todos/:id', function(req, res) {
    let id = req.params.id;
    let todo = req.body;
    if(todo && todo._id !== id) {
        return res.status(500).json({err: "Ids do not match!"})
    }
    Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
        if(err) {
            return res.status(500).json({err: err.message});
        }
        res.json({'todo': todo, message: 'Todo Updated'});
    })
});

module.exports = router;