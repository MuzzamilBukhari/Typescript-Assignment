const magicians_names = ["Ali", "Ahmed", "John"];

function showMagicians(names: string[]) {
  names.forEach((name) => console.log(name));
}

showMagicians(magicians_names);

function makeGreat(names: string[]): string[] {
  let newArray: string[] = [];
  for (let i = 0; i < names.length; i++) {
    newArray[i] = "The great " + names[i];
  }
  return newArray;
}

// make a copy of new magicians names with great
let greatMagicians: string[] = makeGreat(magicians_names);

// showing that magicians names is unchanged
showMagicians(magicians_names);

// new array has the great in every element
showMagicians(greatMagicians);
export {};
