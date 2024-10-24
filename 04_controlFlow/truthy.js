const userEmail = "sm@gmail.com"
const userEmail1 = [] //true
const userEmail2 = ""//false

if(userEmail){ //by default checks it true in string case
    console.log("Got an user email")
}else{
    console.log("Don't have a user email");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
//"0", 'false', " ", [], {}, function(){}

//checking for array
const userEmaild = [] 
if(userEmaild.length === 0){
    console.log("Array is empty");
}

//check object..
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator(??):null//undefined
let val1;
//val1 = 5??10
//val1 = null??10
val1 = undefined??20
val2 = null??10??30
console.log(val1)//10//20-for null and undefined
console.log(val2)//10

//Terinary Operator
//condition?true:false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80")//less than 80

