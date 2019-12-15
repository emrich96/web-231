/*
============================================
; Title: Discussion 3.1
; Author: Sarah Kovar
; Date: 15 December 2019
; Modified By: Emily Richter
; Description: This program utilizes a switch
; case control statement that contains two
; errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../kovar-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 3.1'));

var animal = "sheep";

//switch statement to output different animal noises
/* ER - The expression for the the switch statement was not "sheep" but animal. The expression is not used to input a value. you had already declared the value in the variable declaration above. */
switch(animal) {
  case "cow":
    text = "Moooooooo";
    console.log(text);
    break;
  case "horse":
    text = "Neigh";
    console.log(text);
    break;
  case "chicken":
    text = "Cluck";
    console.log(text);
    break;
  case "pig":
    text = "Oink";
    console.log(text);
    break;
  case "sheep":
    text = "Baaa";
    console.log(text);
    break;
  /* ER - Missing a colon after default. Case and default labels require a colon. */
    default:
    text = "Are you sure that is a farm animal?";
    console.log(text);

}
