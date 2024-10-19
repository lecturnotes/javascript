console.log("s")
console.log("m")
console.log("i")
console.log("t")
console.log("a")

function sayMyName(){ //function defination
    console.log("s")
    console.log("m")
    console.log("i")
    console.log("t")
    console.log("a")  
}
//sayMyName //funtion reference
sayMyName() //function exeution with ()

function addNumbers(num1,num2){ //num1,num2-parameters
    console.log(num1+num2)
}
function addTwoNumbers(num1,num2){ //num1,num2-parameters
    result =num1+num2
    //or return num1+num2 
    return result
    //console.log("smita")--after return no code works..it can work before return
}
addNumbers(2,6)//8 ...2,6 called arguments
addNumbers(2,"4")//24
addNumbers(3,"a")//3a
const resultt=addTwoNumbers(5,6)
console.log(resultt);

function loginUserMsg(username = "sam"){
    if(username === undefined){
        //or (!username){
      console.log("Please enter user name")
      return
    }
     return `${username} just logged in`
}
console.log(loginUserMsg("smita")) //smita just logged in
console.log(loginUserMsg()) //sam just logged in

function calculateCartPrice(val1,val2,val3, ...num1){
return num1
}
console.log(calculateCartPrice(200,400,600,2000))//[2000]

const user = {
    username: "smita",
    price:22
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user) //Username is smita and price is 22
                 //or
handleObject({
    username:"googly",
    price:200           //Username is googly and price is 200
})   

const myNewArr = [200,300,400,500]
function returnSecondArr(getArr){
    return getArr[2]
}
console.log(returnSecondArr([200,300,400,500]))//400