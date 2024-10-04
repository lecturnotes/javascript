const accountId = 15567;
let accountEmail = "sm@gmail.com";
var accountPassword = "password123"
accountCity = "jaipur" /*in js without any keyword variable can take space in memeory 
like this also but this is not the right way to declare variable.*/
let accountState; //output is undefined as there is no value defined.

//accountId = 2; //not allowed in const case.
accountEmail = "hc@gmail.com"
accountPassword = "45454545"
accountCity = "Bangalore"

/*
prefer not to use var, because of issue in block scope and functional scope. 
*/
console.log(accountId); 
console.table([accountEmail, accountPassword, accountCity, accountState])