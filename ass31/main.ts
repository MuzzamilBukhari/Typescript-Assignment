let usernames = ["admin", "muzzamil", "aliyan", "nabeel", "hamza", "saim"];
// usernames = [];
if (usernames.length == 0){
  console.log("We need to find some users!");
}
usernames.map(username => {
  if(username == "admin"){
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
})

export {}