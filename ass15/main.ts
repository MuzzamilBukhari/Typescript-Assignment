const guestList = ["Muzzamil", "Aliyan", "Hamza", "Saim", "Daniyal", "Nabeel"];

guestList.forEach(guest => console.log(`${guest}, I invite you to a Dinner at my home tonight.`))

console.log(`${guestList[3]} can't come!`);

guestList[3] = "Hasan";

guestList.forEach(guest => console.log(`${guest}, I invite you to a Dinner at my home tonight.`))



