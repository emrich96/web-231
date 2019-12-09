/*
============================================
; Title:  Assignment 2.3 - Function Properties
; Author: Emily Richter
; Date:   8 December 2019
; Description: Demonstrates how to define and call function properties
;===========================================
*/
// Header
const header = require('../RichterEmily');
console.log(header.display("Emily", "Richter", "Exercise 2.2"))

// Function property definition
myName.emily = "Emily"

// Function, 0 parameters
function myName() {
  return myName.emily
}

// Output
console.log('My name is ' +  myName())
