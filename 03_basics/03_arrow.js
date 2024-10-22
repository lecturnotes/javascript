const user = {
    username: "Smita",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this) //gives current object value
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
console.log(this)//{} , but if sameruns on console of browser it giver window object.

// function chai(){
//     let username = "smita"
//     console.log(this.username) //undefined...only valid in case of object
//     console.log(this)
// }
//chai() // while inside function 'this' has many values...

// const chai = function(){
//     let username = "smita"
//     console.log(this.username)
// }

const chai = () => {
    let username = "smita"
    console.log(this)//{}
}
chai()

//method 1
const addTwo = (num1, num2) =>{
    return num1+num2 //explicit return //in curly braces return keyword required to write 
}

//method 2
const addThree = (num1, num2) => (num1+num2) //implcit return //without return keyword
console.log(addThree(1,2))//3

//returning a object...
const retObject = (num1, num2) => ({
    usrname: "Smita",
    price: 999
})
console.log(retObject(2,4)) //{ usrname: 'Smita', price: 999 }