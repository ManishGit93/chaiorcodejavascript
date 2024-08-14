let val1 = 10;
let val2 =9;
function addNumber(num1,num2){
    let total =  num1 + num2;
    console.log("Total of That Number:",total)
    return total
}
let result1 = addNumber(val1,val2)
let result2 = addNumber(10,2) 


//First Step Global execution/Global Enviroment

// Then Memory Phase 
// val1 => undefined
// val2 => undefined
// addNumber => Defination
// result1 => undefined
// result2 => undefined

// Then in execution Phase
// val1 => 10
// val2 => 5
// addNumber make another execution context because its a function in
// this context its makes new variable enviroment and execution Thread
// then in execution Thread make memory phase it makes val1 => undefined val2 => undefined
// total => undefined and its execution context num1=>10 num2=>5 total=> 15 then this total return value transfred to Global Executional Context after that functional execution context is delete then 
// the value of total goes into execution Phase

