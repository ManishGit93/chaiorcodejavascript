const user = {
    userName: "Manish",
    price: 99,
    welcomeMsg: function () {
        console.log(`${this.userName}, welcome to website`)
        // console.log(this)
    }
    
}

// user.welcomeMsg()
// user.userName = "Anil";
// user.welcomeMsg()

// console.log(this)


// const one =  ()=>{
//     console.log(this)
// }
// one();


// function two(){
//     console.log("Simple Function:",this)
// }
// two()


const addTwo= (num1,num2)=>{
   const num = num1 + num2;
   console.log("Addition of Number:",num)
   return num;
}

addTwo(8,9);


const implictAdd = (num1, num2)=>(num1+ num2);

console.log(implictAdd(89,78))



