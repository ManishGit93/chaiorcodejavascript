const name = "Manish"
const repoCount = 50;

console.log(`My name is ${name} and my repo count is ${repoCount}`)

console.log(typeof(name));

const getName = new String("Manish")
console.log(getName[0])
console.log(getName.__proto__);

console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(2));
console.log(getName.indexOf('n'));

const newString = getName.substring(0,5);
console.log(newString);

const anotherString = getName.slice(-8,5);
console.log(anotherString)
 
const url = "hhooao://";

url.includes
