//IIFE...(Immediately Invoked Function Expression)

(function myFun(){
    console.log(`DB CONNECTED`) //to avoid global scope pollution iife is used.
})(); //semicolon required in iife case to execute nextline code

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Smita'); //semicolon required to execute nextline code

(function aurCode(){
    console.log("DB CONNECTED THREE")
}) ()