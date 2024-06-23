"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = [
    "Muzzamil",
    "Aliyan",
    "Hamza",
    "Saim",
    "Daniyal",
    "Nabeel",
];
guestList.forEach(function (guest) {
    return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight."));
});
console.log("".concat(guestList[3], " can't come!"));
guestList[3] = "Hasan";
guestList.forEach(function (guest) {
    return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight."));
});
console.log("I found the bigger dinner table!");
guestList.unshift("Bilal"); // Adding element in the start of array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Abbas"); // Add Element in the middle
guestList.push("Huzaifa"); // Append element in last
guestList.forEach(function (guest) {
    return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight."));
});
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    var name_1 = guestList.pop();
    if (name_1 !== undefined) {
        console.log("I am sorry ".concat(name_1, ", I can't invite you to dinner!"));
    }
}
while (guestList.length > 0) {
    var name_2 = guestList.pop();
    if (name_2 !== undefined) {
        console.log("".concat(name_2, ", you're still invited!"));
    }
}
console.log("length of an array is ".concat(guestList.length));
