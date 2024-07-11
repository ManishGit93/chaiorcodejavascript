let person={
    name:"John",
    age: 30,
    grades:["A","B","C"],
    greet: function(){
        console.log(this.name)
    }
}

console.log(person.name);

console.log(person.grades[2]);

person.greet();