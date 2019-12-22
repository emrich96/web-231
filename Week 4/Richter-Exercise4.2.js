/*
=============================================
; Title:  Exercise 4.2
; Author: Emily Richter
; Date:   22 December 2019
; Description: Follow assignment instructions
; to prove understanding of arrays.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 4.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

// Create string array
var fruit = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear']

// Declare function getFruit
function getFruit(fruit) {
  for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
  }
}

// Output
getFruit(fruit)
