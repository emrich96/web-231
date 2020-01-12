/*
=============================================
; Title:  Assignment 5.4
; Author: Emily Richter
; Date:   12 January 2020
; Description: Follow assignment instructions
; to prove understanding of arrays.
;============================================
*/

// Start program

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Assignment 5.4"));

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

// Filtered array by rating
ratedList = famousComposers.map(function(composer) {
  var ratingsObject = {
    rating: composer.rating,
    lastName: composer.lastName
  }
  return ratingsObject;
});

// Filtered array by genre
genreList = famousComposers.map(function(composer) {
  var genreObject = {
    genre: composer.genre,
    lastName: composer.lastName
  }
  return genreObject
});

// Output

console.log('-- COMPOSER BY RATING --');
ratedList.forEach(function(composer) {
  console.log("Rating: " + composer.rating + "\nComposer: " + composer.lastName)
});
console.log('-- COMPOSER BY GENRE --');
genreList.forEach(function(composer) {
  console.log("Genre: " + composer.genre + "\nComposer: " + composer.lastName)
});

// End program
