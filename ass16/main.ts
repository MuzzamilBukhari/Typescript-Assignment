const guestList = ["Muzzamil", "Aliyan", "Hamza", "Saim", "Daniyal", "Nabeel"];

guestList.forEach(guest => console.log(`${guest}, I invite you to a Dinner at my home tonight.`))

console.log(`${guestList[3]} can't come!`);

guestList[3] = "Hasan";

guestList.forEach(guest => console.log(`${guest}, I invite you to a Dinner at my home tonight.`))

console.log("Found the bigger dinner table!");

guestList.unshift("Bilal") // Adding element in the start of array

const middleIndex = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Abbas");  // Add Element in last

guestList.push("Huzaifa")   // Append element in last

guestList.forEach(guest => console.log(`${guest}, I invite you to a Dinner at my home tonight.`))

export {}
