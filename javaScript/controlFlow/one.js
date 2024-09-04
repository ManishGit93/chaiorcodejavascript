const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle= true;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allowed to Shopping");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User LoggedIn")
}