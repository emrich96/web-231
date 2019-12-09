/*
============================================
; Title:  Assignment 2.4 - Functions
; Author: Emily Richter
; Date:   8 December 2019
; Description: Demonstrate understanding of
; functions with and without parameters
;===========================================
*/

// Required import statement for header
const header = require('../RichterEmily');

// Variable declarations for functions
var name = fullName("Emily", "Richter")
var date = dateWriter(2019, 8, 11)
var temp = formatNumber(39)
var age = convertToInt(23)
var money = convertToFloat(50000.00)

// Function declarations
// Return name
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Return date
function dateWriter (year, month, day) {
  return new Date(year, day, month).toLocaleDateString();
}

// Return temperature
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions)
}

// Return age
function convertToInt(number) {
  return parseInt(number)
}

// Return money
function convertToFloat(number) {
  return parseFloat(number)
}

// Output
console.log(header.display("Emily", "Richter", "Assignment 2.4"))
console.log("\nHello my name is " + name + "!\n")
console.log("Today's date is " + date + " and the current temperature is " + temp + " degrees.\n")
console.log("I am " + age + " years old and my savings account goal is " + money + " dollars.\n")

// End program
