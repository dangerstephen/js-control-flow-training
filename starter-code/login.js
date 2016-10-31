console.log("login.js loaded");


var userLogin = {userName: "dangerstephen", password: "password"}

var passwordInput;

var loggedIn = false;

while (!loggedIn){
	passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
	if (passwordInput === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}


// Add to the function that they only get to try the password 3 times
// after whcih tell them that they are locked out
