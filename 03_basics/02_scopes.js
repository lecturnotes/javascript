//var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log(a)
    //console.log(b)

}

// for(let i=0; i<array.length; $i++){
//     const element = array[i]
// }

//console.log(a)//10 inside scope-undefined
//console.log(b)//20 inside scope-undefined
//console.log(c)//30 inside scope-30

//Nested scope
function one(){
    const username = "Smita"
    function two(){
        const website = "youtube";
        console.log(username) //Clouser- child method can access parent method in nested scope 
    }
    //console.log(website)// not found , shows error as out of scope
    two()
}
//one()

//with if-else statement...
if(true){
    const username = "Smita"
    if(username == "Smita"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website)//out of scope
}
//console.log(username)//out of scope

//++++++++++++imp+++++++++++++++++++++++++
console.log(addOne(5))//6
function addOne(num){
    return num+1
}

//console.log(addtwoval(7)) //can't access here as the function declared in a variable //hoisting
const addtwoval = function(num){
 return num + 2
}
console.log(addtwoval(6))