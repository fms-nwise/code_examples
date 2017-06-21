'use strict';

(function () {
  const student = { name: 'James' };
  
  function createStudent(name) {
    const student = { name: name };
    return student;
  }
  
  console.log(createStudent('Ken'));
  console.log(student);
})();

//These two const variables are in different scopes so there is not error when running this