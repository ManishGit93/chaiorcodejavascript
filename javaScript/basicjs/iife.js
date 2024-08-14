//Immediately Invoked Function Expression (IIFE)

(function one(){
    ///Named IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    //UnNamed IIFE
    console.log(`DB Connected Two ${name}`)
})('Manish')