/*
=============================================
; Title:  Exercise 4.3
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
console.log(header.display("Emily", "Richter", "Exercise 4.3"));

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

// Create string array
var vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];
var i;

// Declare function getValue
function getValue(vehicles, string) {
  for (j = 0; j < vehicles.length; j++){
    if (vehicles[j] === string) {
      return vehicles[j]}
  }
}

// Output
console.log('\n-- DISPLAYING ARRAY ITEMS --');
for (i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i])
}

console.log('-- SELECTED VALUE --')
console.log(getValue(vehicles, 'Bus'))

console.log('-- SELECTED VALUE --')
console.log(getValue(vehicles, 'Airplane'))

// End program
