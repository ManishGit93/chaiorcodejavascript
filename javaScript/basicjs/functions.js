function sayMyName() {
    console.log("Manish")
}

sayMyName();


function addTwoNumber(number1,number2){
    console.log(number1 + number2)
}

addTwoNumber(67,89);


function addThreeNumber(num1,num2,num3){
    const result =  num1 + num2 + num3;
    return result
}

const result = addThreeNumber(4,89,67);

console.log("Result is:",result);


function loginUserMessage(userName){
    return `${userName} just logged in`
}

console.log(loginUserMessage("Manish"));
