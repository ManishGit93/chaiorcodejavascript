const myArr =  [0,1,2,3,4,5]
const myHeros = ["sheldon","Raj"]

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[4])

myArr.push(6);
// console.log(myArr)
myArr.pop()
// console.log(myArr);

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

const arr1 = myArr.slice(1,3);
console.log("Slice:",arr1);
console.log("A:",myArr);

const arr2 = myArr.splice(1,3);
console.log("Splice:",arr2);
console.log("B:",myArr)


