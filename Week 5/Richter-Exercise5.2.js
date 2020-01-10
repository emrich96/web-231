/*
=============================================
; Title:  Exercise 5.2
; Author: Emily Richter
; Date:   7 January 2020
; Description: Follow assignment instructions
; to prove understanding of arrays.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 5.2"));

/*
  Expected output:
  Emily Richter
  Exercise 5.2
  Today's Date
  Pasta
  Sushi
  Pizza
  Ramen
  Soup
*/

// Declare array 'food'
var food = ['Pasta', 'Sushi', 'Pizza', 'Ramen', 'Soup'];

// Iterate over array and output
food.forEach(function(value)
  {console.log(value)});

// End program
