"use strict";
var guestList = ["Muzzamil", "Aliyan", "Hamza", "Saim", "Daniyal", "Nabeel"];
guestList.forEach(function (guest) { return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight.")); });
console.log("".concat(guestList[3], " can't come!"));
guestList[3] = "Hasan";
guestList.forEach(function (guest) { return console.log("".concat(guest, ", I invite you to a Dinner at my home tonight.")); });
