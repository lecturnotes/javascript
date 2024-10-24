//if
if(true){
    //execute code
}
if(false){
    //does not execute code
}
 const isLoggedin = true
 //operators-> <, >, <=, >=, ==, ===
 const score = 200
 if(score > 100){
    const power = "fly" // if var, its available out of scope coz its global
    console.log(`user power: ${power}`) //user power: fly
 }
  //console.log(`user power: ${power}`) //will show error as out of scope 'power'

  //short-hand notation..
  const balance = 1000
  if(balance > 500) console.log("test"), console.log("test2"); //test test2

  //nesting
  if(balance < 500){
    console.log("less than 500")
  }else if(balance < 750){
    console.log("less than 750")
  }else{
    console.log("less than 1200") //o/p-less than 1200
  }
  //-----------------------------------------
  const userLoggedIn = true
  const debitCard = true
  const loggedInformGoogle = false
  const loggedInfromEmail = true
  if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy!")
  }

  if(loggedInformGoogle || loggedInfromEmail){
    console.log("User Logged in");
  }