/*
============================================
; Title:  Richter-Assignment3.4.js
; Author: Emily Richter
; Date:   15 December 2019
; Description: Loop that attempts to match
; defined variable w/ random integer
;===========================================
*/

// Required header statement
const header = require('../RichterEmily');

// Declare variable to match random integer
var myNum = 4;

// Define functions
/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

function match(param1, param2) {
  if (param1 === param2) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(param1, param2) {
  console.log(param1 + " does not match " + param2 + "!");
}

function logMatch(param1, param2) {
  console.log(param1 + " does match " + param2 + "!");
}

// Output
console.log(header.display("Emily", "Richter", "Assignment 3.4"));
console.log("\n-- DO THE NUMBERS MATCH GAME --")
for (x = 0 ; x < 10; x++) {
  var randNum = randomNumber();
  if (match(myNum, randNum)) {
    logMatch(myNum, randNum);
  } else {
    logMismatch(myNum, randNum);
  };
}

// End program
