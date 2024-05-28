const jsUser = {
    firstName:"Manish",
    lastName:"Kumar",
    location:"Gurugram",
    email:"mkmanish@gmail.com",
    isLoggedIn:"false",
    lastLoginDays:["Monday,Thrusday"]
}

jsUser.greeting = function(){
    console.log("Hello")
}

console.log(jsUser.greeting())

console.log(jsUser.email)