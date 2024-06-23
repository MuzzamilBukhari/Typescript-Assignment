"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["Muzzamil", "Aliyan", "Hamza", "Saim", "Daniyal", "Nabeel"];
guestList.forEach(function (guest) { return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight.")); });
console.log("".concat(guestList[3], " can't come!"));
guestList[3] = "Hasan";
guestList.forEach(function (guest) { return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight.")); });
console.log("Found the bigger dinner table!");
guestList.unshift("Bilal"); // Adding element in the start of array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Abbas"); // Add Element in last
guestList.push("Huzaifa"); // Append element in last
guestList.forEach(function (guest) { return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight.")); });
