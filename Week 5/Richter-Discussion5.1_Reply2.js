/*
============================================
; Title: Discussion-5.3
; Author: Verlee Washington
; Date:   12 January 2020
; Modified by: Emily Richter
; Description: Create a keyed collection with
; 2 errors to debug.
;===========================================
*/

// Start program

// A simple key/value map object

var greetings = new Map();

// Creating sets

greetings.set ('America', 'hello');
greetings.set ('France', 'allo');
greetings.set ('Mexico', 'hola');
greetings.set ('Hawaii', 'aloha');

// For loop to iterate and return the key/value array

// ER - Missing an 's' at the end of the map name in your statement.
for (var [key, value] of greetings) {
  // ER - The plural 'values' are not defined in the map, only 'value' singular.
  console.log("In " + key  + ' some people say ' + value + " as a greeting.");
}

// End program
