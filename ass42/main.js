"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians_names = ["Ali", "Ahmed", "John"];
function showMagicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
showMagicians(magicians_names);
function makeGreat(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "The great " + names[i];
    }
}
makeGreat(magicians_names);
showMagicians(magicians_names);
