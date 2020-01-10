/*
=============================================
; Title:  Exercise 5.3
; Author: Emily Richter
; Date:   7 January 2020
; Description: Follow assignment instructions
; to prove understanding of arrays.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 5.3"));

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// Declare famousComposers and objects
var famousComposers = [

  {firstName: 'Howard',
   lastName: 'Shore',
   genre: 'Film Score',
   rating: 6},

  {firstName: 'Andrew',
   lastName: 'Lloyd Weber',
   genre: 'Musical Theatre',
   rating: 9},

  {firstName: 'Alan',
   lastName: 'Menken',
   genre: 'Film Score',
   rating: 7},

  {firstName: 'Stephen',
   lastName: 'Sondheim',
   genre: 'Musical Theatre',
   rating: 8},

  {firstName: 'Koji',
   lastName: 'Kondo',
   genre: 'Video Game',
   rating: 7}
];

// Output
console.log('-- COMPOSERS --')
famousComposers.forEach(function(composer)
{console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)});

// End program
