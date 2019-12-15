/*

============================================
; Title: Mailloux Assignment 3.1.js
; Author: Laurie Mailloux
; Date: December 15 2019
; Modified By: Emily Richter
; Description: Write control code that will
; not run and has at least 2 errors for
; others to debug.
; Expected output: Correct Number!
;===========================================
*/

//start program

//function

function foo(num) {

/* ER - Missing opening parentheses on switch expression. Incomplete syntax. */
switch (num) {
case 5:
console.log("Correct Number!");
break;
case 10:
console.log("Incorrect number, but only 5 away!");
break;
case 50:
console.log("Incorrect Number, pretty far away!");
break;
/* ER - Missing colon after default. Case and default labels require a colon. */
default:
console.log("Negative Number!");
break;
}
}
foo(5);

// if (num === 5) {
// return "Correct Number!"
// } else if (num === 10){
// return "Incorrect Number, but only 5 away"
// } else if (num === 50){
// return "Incorrect Number, pretty far away"
// }

//end program
