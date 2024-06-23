// Test case 1
let temperature = 30;
console.log("Is temperature < 25? I predict false.");
console.log(temperature < 25); // false

// Test case 2
let hasCompleted = false;
console.log("Is hasCompleted == false? I predict true.");
console.log(hasCompleted == false); // true

// Test case 3
let color = "blue";
let shape = "circle";
console.log("Is color == 'blue' && shape == 'circle'? I predict true.");
console.log(color == "blue" && shape == "circle"); // true

// Test case 4
console.log("Is color == 'blue' && shape == 'square'? I predict false.");
console.log(color == "blue" && shape == "square"); // false

// Test case 5
let season = "summer";
console.log("Is season == 'summer' || season == 'winter'? I predict true.");
console.log(season == "summer" || season == "winter"); // true

// Test case 6
console.log("Is season == 'spring' || season == 'autumn'? I predict false.");
console.log(season == "spring" || season == "autumn"); // false

// Test case 7
let country = "Canada";
let myCity = "Toronto";
console.log(
  "Is country == 'Canada' && (city == 'Toronto' || city == 'Vancouver')? I predict true."
);
console.log(
  country == "Canada" && (myCity == "Toronto" || myCity == "Vancouver")
); // true

// Test case 8
let language = "JavaScript";
console.log("Is language == 'javascript'? I predict false.");
console.log(language == "javascript"); // false

// Test case 9
console.log("Is language == 'JavaScript'? I predict true.");
console.log(language == "JavaScript"); // true

// Test case 10
let myAge = 18;
let hasPermission = true;
console.log("Is age >= 18 && hasPermission == true? I predict true.");
console.log(myAge >= 18 && hasPermission == true); // true

// Test case 11
let isMember = false;
console.log(
  "Is (age >= 18 || hasPermission == true) && !isMember? I predict true."
);
console.log((myAge >= 18 || hasPermission == true) && !isMember); // true

// Test case 12
let fruits = ["apple", "banana", "cherry"];
console.log("Is fruits.length == 3? I predict true.");
console.log(fruits.length == 3); // true

// Test case 13
console.log("Is fruits[2] == 'cherry'? I predict true.");
console.log(fruits[2] == "cherry"); // true

// Test case 14
console.log("Is fruits[5] == undefined? I predict true.");
console.log(fruits[5] == undefined); // true

// Test case 15
console.log("Is cherry includes in array ? I predict true.");
console.log(fruits.includes("cherry"));

// Test case 15
console.log("Is cherry not includes in array ? I predict false.");
console.log(!fruits.includes("cherry"));
