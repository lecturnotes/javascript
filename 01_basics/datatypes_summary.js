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

//************************MEMORY IN JS*****************************//
//stack(primitive) -when define a variable get a copy of that not original value
//heap(non primitive) -when defined get the reference of tht variable/original value will be changed if changed any where

let myYoutubename = "smitamishra";
let anothername = myYoutubename
anothername = "howareyou"
console.log(myYoutubename);
console.log(anothername);

//object..heap memory...

let userOne = {
    email: "sm@gmail.com",
    upi: "sm@yybl"
}

let userTwo = userOne

userTwo.email = "sm2@gmail.com"
userTwo.upi = "sm2@ybl"

console.log(userOne)
console.log(userTwo)