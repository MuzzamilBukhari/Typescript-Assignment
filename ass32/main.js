"use strict";
var current_users = ["muzzamil", "aliyan", "nabeel", "hamza", "usama"]; // all usernames should be in lower case
// if current_users are not on in lower case, apply loop and make all usernames in lowercase
var new_users = ["ahad", "aliyaN", "fazil", "uSama", "owais"];
new_users.forEach(function (newUser) {
    if (current_users.includes(newUser.toLowerCase())) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("username is available.");
    }
});
