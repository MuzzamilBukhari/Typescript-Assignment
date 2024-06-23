function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Shirt size is ".concat(size, ", and print the message : ").concat(message));
}
// Calling a function without argument, so the default values are set
make_shirt();
// Calling a function for mediumm size with default message
make_shirt("Medium");
