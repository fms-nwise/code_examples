'use strict';

var Teacher = function (data) {
  this.name = data.name;
  this.greet = function (studentCnt) {
    let promise = new Promise(function (resolve, reject) {
      if (studentCnt === 0) {
        reject('Zero students in class');
      } else {
        resolve(`Hello to ${studentCnt} of my favorite students!`);
      }
    });
    return promise;
  }
}

var Classroom = function (data) {
  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  }
  this.greet = () => {
    this.teacher.greet(this.students.length).then(
      (function (classroom) {
        return function (greeting) {
          console.log(`${classroom.teacher.name} says: `, greeting);
        }
      })(this),
      function (err) {
        console.log(err);
      })
  }
}

var myTeacher = new Teacher({ name: 'James' });
var myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });