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

//*******************************OPERATIONS******************************//
let value = 2;
let negValue = -value;
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2%3);

let str1 = "hello";
let str2 = " Smita";
let str3 = str1+str2;
console.log(str3);
console.log("1"+2); //o/p-12
console.log(1+"2"); //12
console.log("1"+2+2+3+5);//12235
console.log(1+2+"2");//32

console.log(true);
console.log(+true);//1  increment value
console.log(+"");//0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
