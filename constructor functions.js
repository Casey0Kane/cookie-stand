 //Demo for objects-to-constructors
'use strict';

var hawa = { //eslint-disable-line
  course: '201d15',
  firstName: 'Hawa',
  lastInitial: 'A',
  faveNumber: 13,
  isCodeNinja: true,
  introduction: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 275 lines of code to model our class this way
 //(25 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

var mahClass = [];
// var hawa = {
// constructor function
function Student(firstName, lastInitial, faveNumber) {
  this.course = '201d15';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  mahClass.push(this);
  console.log(mahClass);
  alert('A new student was just added to the class');
}

// Instances
new Student('Hawa', 'A', 17);
new Student('Marc', 'F', 33);
new Student('Michael', 'P', 7);
// change something in the constructor
mahClass[1].lastInitial = 'Z';
// add new property to array v
mahClass[1].pokemon = 'Zubat';
// change something common
Student.prototype.course = '301d11';
//instead of 275 lines I can use an object constructor of 11 lines plus 25 one-line instantiations of individual students , and model the entire class with 36 lines.
