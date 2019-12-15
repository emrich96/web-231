/*
============================================
; Title:  Richter-Exercise3.3.js
; Author: Emily Richter
; Date:   15 December 2019
; Description: Displays a string message
; based on value of eventKeyCode.
;===========================================
*/

// Required header statement
const header = require('../RichterEmily');
console.log(header.display("Emily", "Richter", "Exercise 3.3"));
/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13

switch (eventKeyCode) {
  case 13:
  console.log('The enter key was pressed.')
  break;
  case 16:
  console.log('The shift key was pressed.')
  break;
  case 32:
  console.log('The spacebar key was pressed.')
  break;
  case 8:
  console.log('The backspace / delete key was pressed.')
  break;
  default:
  console.log('Unrecognized key.');
}

// End program
