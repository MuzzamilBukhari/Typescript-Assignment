const magicians_names = ["Ali", "Ahmed", "John"];

function showMagicians(names: string[]) {
  names.forEach((name) => console.log(name));
}

showMagicians(magicians_names);

function makeGreat(names: string[]) {
  for (let i = 0; i < names.length; i++) {
    names[i] = "The great " + names[i];
  }
}
// call function to add the great
makeGreat(magicians_names);
// print to show that each magicians_names is change
showMagicians(magicians_names);

export {};
