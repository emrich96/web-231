/*
============================================
; Title:  Richter-Exercise3.2.js
; Author: Emily Richter
; Date:   15 December 2019
; Description: Test variables against each
; other to determine if values match.
;===========================================
*/

// Required header statement
const header = require('../RichterEmily');

// Test variable declaration
var test1 = 1;
var test2 = 2;
var test3 = "Car";
var test4 = "Car";
var test5 = "Dog";
var test6 = "Cat";

// Defining functions
function match(param1, param2) {
  if (param1 === param2) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(param1, param2) {
  console.log(param1 + " and " + param2 + " do not match!");
}

function logMatch(param1, param2) {
  console.log(param1 + " and " + param2 + " do match!");
}

// Output
/*
  Expected output:
  FirstName LastName
  Exercise 3.2
  Today's Date
  // output from the match() function
  false
  true
  // output from the if...else blocks
  1 and 2 do not match!
  Car and Car do match!
  Dog and Cat do not match!
*/
console.log(header.display("Emily", "Richter", "Exercise 3.2"));

// Test variables 1 and 2
console.log(match(test1, test2));
if (match(test1, test2)) {
  logMatch(test1, test2)
} else {
  logMismatch(test1, test2)
};

// Test variables 3 and 4
console.log(match(test3, test4));
if (match(test3, test4)) {
  logMatch(test3, test4)
} else {
  logMismatch(test3, test4)
};

// Test variables 5 and 6
console.log(match(test5, test6));
if (match(test5, test6)) {
  logMatch(test5, test6)
} else {
  logMismatch(test5, test6)
};

// End program
