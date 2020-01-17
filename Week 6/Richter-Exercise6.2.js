/*
=============================================
; Title:  Exercise 6.2
; Author: Emily Richter
; Date:   14 January 2020
; Description: Demonstrates a try/catch/finally block.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 6.2"));

/*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

try {

  // Declare array
  var primaryColors = ['red', 'yellow', 'blue'];

  primaryColors.indexOf(red);

} catch (err) {

  console.log("Catch clause: " + err);

} finally {

  console.log("Finally clause reached...");

}

// End program
