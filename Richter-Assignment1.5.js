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
var payRate1 = 13.5515;
var hireDate1 = new Date(2019, 2, 3);

// Variable assignment group 2
var firstName2 = "Jill";
var lastName2 = "Johnson";
var address2 = "22 B Lane";
var payRate2 = 14.7585;
var hireDate2 = new Date(2018, 1, 2);

// Variable assignment group 3
var firstName3 = "Jack";
var lastName3 = "Williams";
var address3 = "33 C Lane";
var payRate3 = 15.2545;
var hireDate3 = new Date(2017, 0, 1);

// Output
console.log("Name: " + firstName1 + " " + lastName1)
console.log("Address: " + address1)
console.log("Pay Rate: " + payRate1.toFixed(1))
console.log("Date Hired: " + hireDate1.toLocaleDateString())
console.log("")
console.log("Name: " + firstName2 + " " + lastName2)
console.log("Address: " + address2)
console.log("Pay Rate: " + payRate2.toFixed(1))
console.log("Date Hired: " + hireDate2.toLocaleDateString())
console.log("")
console.log("Name: " + firstName3 + " " + lastName3)
console.log("Address: " + address3)
console.log("Pay Rate: " + payRate3.toFixed(1))
console.log("Date Hired: " + hireDate3.toLocaleDateString())
