//array

const myArr = [1,2,3,4,5,"smita",0] //can be string , intigers, or any datatypes inside an array.
const myHeros = ["shaktimaan","nagraj"]
const myArr2 = new Array(1,2,3,4) //another way to define array
console.log(myArr[0])//access array values by its indexes

myArr.push(7) //adds value to myarr...
console.log(myArr)

myArr.pop()//removes last element from array.
console.log(myArr)

myArr.unshift(9)//adds element from strating  or shifts element
console.log(myArr)//o/p- [ 9, 1, 2, 3, 4, 5, 'smita', 0 ]
myArr.shift()//removes element from starting...
console.log(myArr)//o/p- [ 1, 2, 3, 4, 5, 'smita', 0 ]

console.log(myArr.includes(9))//returns true or false //false
console.log(myArr.indexOf(5))//o/p - 4

const newArr = myArr.join() //converts to string datatype, value will be same
console.log(typeof newArr) //o/p-string

//slice //splice
console.log(myArr.slice(1,3))//o/p - [2,3], doesnt include last index value 3
console.log(myArr) //original array remains same

console.log(myArr.splice(1,3)) //o/p- [2,3,4],includes last index as well
console.log(myArr)// removes splice elements from original array...