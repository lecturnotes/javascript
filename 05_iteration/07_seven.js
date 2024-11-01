const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumbers.map( (num)=> num+10)
console.log(newNum)//[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const newNum1 = myNumbers
                .map( (num)=> num*10 )
                .map( (val)=>val+1)
               // .filter( (num)=>num>=40)
 console.log(newNum1) // [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]         

