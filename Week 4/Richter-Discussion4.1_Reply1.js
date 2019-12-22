/*
============================================
; Title: Assignment 4.1
; Author: Zach Dahir
; Date: 12-21-19
; Modified By: Emily Richter
; Description: Code containing two errors
;===========================================
*/

/*Expected output

--The months of the year are--
January
February
March
April
May
June
July
August
September
October
November
December
*/


//Program start

//Declare array of months

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
/* ER - Always use brackets when declaring arrays, not curly braces. */

console.log("--The months of the year are--");

console.log("");

//For loop to display the months

    for(x = 0; x < 12; x++)
    /* ER - Incorrect sign for the 'test' of the for loop.
       You are looking to test for everything before the 13th variable, so the variable should be less than 12.*/
    {

        console.log(months[x]);

    }


//end program
