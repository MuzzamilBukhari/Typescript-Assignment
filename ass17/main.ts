const guestList: string[] = [
  "Muzzamil",
  "Aliyan",
  "Hamza",
  "Saim",
  "Daniyal",
  "Nabeel",
];

guestList.forEach((guest) =>
  console.log(`${guest}, I invite you to a Dinner at my home tonight.`)
);

console.log(`${guestList[3]} can't come!`);

guestList[3] = "Hasan";

guestList.forEach((guest) =>
  console.log(`${guest}, I invite you to a Dinner at my home tonight.`)
);

console.log("I found the bigger dinner table!");

guestList.unshift("Bilal"); // Adding element in the start of array

const middleIndex = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Abbas"); // Add Element in the middle

guestList.push("Huzaifa"); // Append element in last

guestList.forEach((guest) =>
  console.log(`${guest}, I invite you to a Dinner at my home tonight.`)
);

console.log("I can invite only two people for dinner.");

while (guestList.length > 2) {
  const name = guestList.pop();
  if (name !== undefined) {
    console.log(`I am sorry ${name}, I can't invite you to dinner!`);
  }
}

while (guestList.length > 0) {
  const name = guestList.pop();
  if (name !== undefined) {
    console.log(`${name}, you're still invited!`);
  }
}

console.log(`length of an array is ${guestList.length}`);

export {};
