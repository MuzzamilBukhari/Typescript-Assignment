let countries = ["Saudia", "Turkey", "Germany", "Malaysia", "India"];

// print in original order
console.log("print original array : " + countries);

// print in alphabetical order without modifying the original one
const sortedCountries = [...countries].sort();
console.log("Sorted in alphabetical order : " + sortedCountries);

// print original array
console.log("print original array : " + countries);

// print in reverse alphabetical order without modifying the orignal one
const revSortedCountries = [...sortedCountries].reverse();
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




