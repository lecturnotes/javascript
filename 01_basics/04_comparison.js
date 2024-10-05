//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);

console.log("2">1); //true
console.log("02">1); //true

console.log(null>0);//false 0>0
console.log(null>=0);//true 0>=0
console.log(null == 0); //false...== work diff in js.

console.log(undefined > 0); //false
console.log(undefined >= 0); //false
console.log(undefined == 0); //false

// ===  strict check...
console.log("2"===2); //checks variables with datatypes as well //false
