"use strict";
var usernames = ["admin", "muzzamil", "aliyan", "nabeel", "hamza", "saim"];
usernames.map(function (username) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
