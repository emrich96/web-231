/*
===========================================
; Title: Assignment 1.5
; Author: Emily Richter
; Date: 29 November 2019
; Modified By: Emily Richter
; Description: Types, values, and variables
;==========================================
*/

// Variable assignment group 1
var firstName1 = "John";
var lastName1 = "Smith";
var address1 = "11 A Lane";
var payRate1 = 13.5000;
var hireDate1 = new Date(2019, 2, 3);

// Variable assignment group 2
var firstName2 = "Jill";
var lastName2 = "Johnson";
var address2 = "22 B Lane";
var payRate2 = 14.0000;
var hireDate2 = new Date(2018, 1, 2);

// Variable assignment group 3
var firstName3 = "Jack";
var lastName3 = "Williams";
var address3 = "33 C Lane";
var payRate3 = 15.0000;
var hireDate3 = new Date(2017, 0, 1);

// Format payRate to one decimal place
payRate1.toFixed(1);
payRate2.toFixed(1);
payRate3.toFixed(1);

// Output
console.log("Name: " + firstName1 + " " + lastName1)
console.log("Address: " + address1)
console.log("Pay Rate: " + payRate1)
console.log("Date Hired: " + hireDate1)

console.log("Name: " + firstName2 + " " + lastName2)
console.log("Address: " + address2)
console.log("Pay Rate: " + payRate2)
console.log("Date Hired: " + hireDate2)

console.log("Name: " + firstName3 + " " + lastName3)
console.log("Address: " + address3)
console.log("Pay Rate: " + payRate3)
console.log("Date Hired: " + hireDate3)
