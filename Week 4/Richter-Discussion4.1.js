/*
============================================
; Title:  Discussion 4.1
; Author: Emily Richter
; Date:   19 December 2019
; Description: Create a program using an
; array with at least 2 errors.
;===========================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Discussion 4.1"));

// Declare array Serenity
var serenity = ['Mal', 'Wash', 'Jayne', 'Zoe', 'Inara' 'Bester'];

// Delete the sixth element, add four elements
serenity.splice(5, 1, 'Kaylee', 'Book', 'Simon', 'River')

// Define crew function
function crew(serenity) {
  for (i = 0; i < serenity.length; i++) {
    console.log(serenity[])
  }
}

// Call up crew function
console.log('--SERENITY CREW LIST--')
crew(serenity)

//End program
