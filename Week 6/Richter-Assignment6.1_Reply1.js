/*
============================================
; Title: Discussion 6.1
; Author: Sarah Kovar
; Date: 17 January 2020
; Modified By: Emily Richter
; Description: This program utilizes object
; properties and contains two errors.
;===========================================
*/

var midnight = {
    name: 'Midnight',
    color: 'black',
    weight: 11
};

var samson = {
    name: 'Samson',
    color: 'calico',
    weight: 8
};

var mix = {
    name: 'Mix',
    color: 'tuxedo',
    weight: 15
};

// ER - Property names and values should be enclosed in curly brackets not parentheses.
var stormy = {
    name: 'Stormy',
    color: 'grey',
    weight: 7
};

mix.weight = 12;

function showCat(cat) {
    // ER - Access object properties by using a '.' not brackets
    console.log(cat.name + ' is a ' + cat.color + ' cat. ' + cat.name + ' weighs ' + cat.weight + ' lbs.');
}

showCat(midnight);
showCat(samson);
showCat(mix);
showCat(stormy);
