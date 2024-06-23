"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries = ["Saudia", "Turkey", "Germany", "Malaysia", "India"];
// print in original order
console.log("print original array : " + countries);
// print in alphabetical order without modifying the original one
var sortedCountries = __spreadArray([], countries, true).sort();
console.log("Sorted in alphabetical order : " + sortedCountries);
// print original array
console.log("print original array : " + countries);
// print in reverse alphabetical order without modifying the orignal one
var revSortedCountries = __spreadArray([], sortedCountries, true).reverse();
console.log("Reverse alphabetical order : " + revSortedCountries);
// print original array
console.log("print original array : " + countries);
// reverse original array
countries.reverse();
console.log("Reverse orignal array : " + countries);
// reverse  original array again so that it go back to its original position
countries.reverse();
console.log("Again reverse : " + countries);
// sort orignal array in alphabetical order 
countries.sort();
console.log("Sorted in alphabetical order : " + countries);
// sort orignal array in reverse alphabetical order
countries.reverse();
console.log("Reverse alphabetical order : " + countries);
