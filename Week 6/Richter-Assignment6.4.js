/*
=============================================
; Title:  Assignment 6.4
; Author: Emily Richter
; Date:   19 January 2020
; Description: Nested object literal examples.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Assignment 5.4"));

/*
  Expected output:

  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 2319 was created on <today' date> and assigned to employee Emily Richter (Programmer I).
*/

// Create object literal 'ticket' with nested object literal 'person'.
var ticket = {
  id: 2319,
  name: "Account Support",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "low",
  person: {
    id: 113,
    firstName: "Emily",
    lastName: "Richter",
    jobTitle: "Programmer I"
  }
};

// Output
console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);

// End program
