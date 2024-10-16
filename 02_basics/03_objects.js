//singleton

//object literals...

const mySym = Symbol("key1")
const jsuser = {
    name: "smita",
    "full name": "smita mishra",
    [mySym]: "smbolValue",
    age: 30,
    location:"banglore",
    email:"sm@gmail.com",
    isloggedin: false,
    lastlogindays:["monday","sunday"]
}
console.log(jsuser["email"])
console.log(jsuser.email)
console.log(jsuser["full name"])
//console.log(jsuser.full name)//gives error
console.log(jsuser[mySym])

jsuser.email="sm123@gmail.com"
console.log(jsuser.email)
//Object.freeze(jsuser)//freezes object not to change further
jsuser.email="sm456@gmail.com"
console.log(jsuser.email)

//function
jsuser.greeting = function(){
 console.log("Hello js user")
}

jsuser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`)
   }
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())