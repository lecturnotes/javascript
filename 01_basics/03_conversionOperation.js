let score = "33abc"; // 33, null, undefined, true, false (all these can be checked in this conversion)

console.log(typeof score);
console.log(typeof(score));

let valueInNumbar = Number(score);
console.log(valueInNumbar);
console.log(typeof valueInNumbar);

//Notes for conversion in Number()outputs for different types of variable.

//33 => 33
//"33abc" => NaN
//true => 1
//false => 0
//-----------------------------

let isLoggedIn = "smita"; //tried for 0, "", 1..etc
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//Note for boolean conversion

//0 => false, 1 => true
//"" => false
//"smita" => true
//-----------------------------------------------

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(someNumber);
console.log(typeof stringNumber);
