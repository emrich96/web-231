/*
=============================================
; Title:  Exercise 6.3
; Author: Emily Richter
; Date:   19 January 2020
; Description: Demonstrates an object with
; get/set functions
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 6.3"));

/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 404, name: Help Desk Support, requester: Emily Richter}
*/

var ticket = {
  id: 404,
  name: "Help Desk Support",
  requester: "Emily Richter"
};

console.log(JSON.stringify(ticket));
