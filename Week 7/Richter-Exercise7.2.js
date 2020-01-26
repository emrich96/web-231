/*
=============================================
; Title:  Exercise 7.2
; Author: Emily Richter
; Date:   25 January 2020
; Description: Follow instructions to prove
; understanding of constructor functions.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 7.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// Declare employee constructor object
function employee (id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
};

// Populate array with five employee objects
var employees = [
  new employee (1, 'Thomas', 'Edison', 'Software Engineer'),
  new employee (2, 'Bnjamin', 'Franklin', 'Programmer'),
  new employee (3, 'Nikola', 'Tesla', 'Project Manager'),
  new employee (4, 'Charles', 'Babbage', 'Product Manager'),
  new employee (5, 'Alexander', 'Bell', 'Business Analyst')
]

// Output
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' + employees[x].title)
  index++
}

// End program
