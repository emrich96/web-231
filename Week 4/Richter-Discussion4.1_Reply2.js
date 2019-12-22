/*
============================================
; Title:  Kobyluck Discussion 4.1
; Author: Jonathan Kobyluck
; Date:   22 December 2019
; Modified By: Emily Richter
; Description: Arrays
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Discussion 4.1'));

// Line break
console.log("");


// start program

/*
  Expected Output:
  Johnny Kobyluck
  Discussion 4.1
  Today's Date
  The primary colors backwards are purple,blue,green,yellow,orange,red.
*/

// declaring the "colors" array.
var colors = ["red", "black", "yellow", "green"];
/* ER - Deleted random blank ("") element in the array.*/

// inserting "orange" in place of "black" in my "colors" array.
colors.splice(1, 1, "orange");
/* ER - To invoke splice method, you need two numbers: one for array position and one for deletion count.*/

// adding 2 more colors to the "colors" array.
colors.push("blue", "purple");

// flipping the "colors" array in reverse order.
colors.reverse();
/* ER - Missing parentheses behind reverse method. Even if not specifying elements, parentheses are still required.*/

// displaying my "Expected Output".
console.log("The rainbow backwards is " + colors +".");

// end program
