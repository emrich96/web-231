/*
=============================================
; Title:  Assignment 4.4
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
console.log(header.display("Emily", "Richter", "Assignment 4.4"));

// Declare array
var states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

// Create function getState
function getState(states, string) {
  if (states === string) {
    return true;}
};

// Output
// Original array output
console.log('-- ORIGINAL ARRAY --');

for (i = 0; i < states.length; i++) {
  console.log(states[i])
};

// Sort array
states.sort();

//Sorted array output
console.log('-- SORTED ARRAY --');

for (i = 0; i < states.length; i++) {
  console.log(states[i])
};

// Selected value output
console.log('-- SELECTED VALUE --');
// Use filter method to display selected value
console.log(states.filter(state => getState(state, 'Iowa'))[0]);

// End program
