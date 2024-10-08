const score = 500
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)) //o/p-23.9 , as it should return 3 count...

const otherNumberTwo = 234.8966;
console.log(otherNumberTwo.toPrecision(3))// o/p -235 (count precise 3)

const otherNumberThree = 1234.8966;
console.log(otherNumberThree.toPrecision(3))// o/p -1.23e+3

const otherNumberfour = 234.8966;
console.log(otherNumberfour.toPrecision(4))// o/p -234.9 (count precise 3 , as there is no 4 nos..so max will give)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))// en-IN ll give result in indian standard like, 10,00,000

//*******************************MATHS********************************************//
console.log(Math)
console.log(Math.abs(-4))//changes -ve value to positive.
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))//chooses top value = 5
console.log(Math.floor(4.6))//chooses lowest value = 4
console.log(Math.min(1,5,4,8,0))
console.log(Math.max(4,5,6,7,9))

console.log(Math.random())//returns value between 0 to 1 i.e 0.0790528319......;
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)