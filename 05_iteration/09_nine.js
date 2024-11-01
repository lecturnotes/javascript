const myNums = [1,2,3]
const myTotal = myNums.reduce((acc, cur)=>{
    console.log(`acc: ${acc} and cur: ${cur}`)
    return acc+cur
},0)
console.log(myTotal)

//in short
const myTtl =myNums.reduce((acc, cur)=> acc+cur,0)//0-initial value of acc
console.log(myTtl)

//
const shoppingCart = [
    {
    itemName:"js course",
    price:2999
    },
    {
    itemName:"py course",
    price:3999
 },
 {
    itemName:"datascience course",
    price:12999
    }
]
const pricePay=shoppingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(pricePay)

