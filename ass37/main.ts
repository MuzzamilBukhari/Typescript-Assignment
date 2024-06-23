function make_shirt(
  size: string = "large",
  message: string = "I love typescript"
) {
  console.log(`Shirt size is ${size}, and print the message : ${message}`);
}

// Calling a function without argument, so the default values are set
make_shirt();

// Calling a function for mediumm size with default message
make_shirt("Medium");

// Calling a function for small size with different message
make_shirt("Medium", "I love javascript");
