"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians_names = ["Ali", "Ahmed", "John"];
function showMagicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
showMagicians(magicians_names);
function makeGreat(names) {
    var newArray = [];
    for (var i = 0; i < names.length; i++) {
        newArray[i] = "The great " + names[i];
    }
    return newArray;
}
var greatMagicians = makeGreat(magicians_names);
showMagicians(magicians_names);
showMagicians(greatMagicians);
