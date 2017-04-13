'use strict';

function ToDoDirective () {
  return {
    templateUrl: 'templates/todo.html',
    replace: true,
    controller: 'todoCtrl'
  }
}

module.exports = ToDoDirective;