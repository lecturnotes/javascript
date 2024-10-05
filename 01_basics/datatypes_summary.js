//Data types 2 types-primitive and non-premitive(according to memory assignment)

//Premetive 7 types..STORED DIRECTLY IN MEMORY
//String, Number, Boolean, Null, Undefined, Symbol(used to make some component unique), Bigint

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 14578963214578963n


//Non primitive(reference)..STORED REFERENCE TO THEIR VALUES IN MEMORY
//Array, Objects, Functions
const heros = ["shaktimaan", "naagraj", "doga"];

//object
let myObj =
{
    name: "smita",
    age: 30,
}

const myFunction = function(){
    console.log("Hllo World!");
}

console.log(typeof outsideTemp); //to check the type of datatypes...

//null return type = object
//Undefined = Undefined
//Number = Number
//String = string
//Boolean = boolean 