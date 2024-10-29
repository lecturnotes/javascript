//for..each loop
const coding = ["js","cpp","php","rb","c"]
coding.forEach( function (item){
    console.log(item)//returns all value
})
//using arrow function
coding.forEach( (item)=>{
    console.log(item)
})

//using function
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
//-------
coding.forEach( (item,key,value)=>{
    console.log(item,key,value); //js 0 [ 'js', 'cpp', 'php', 'rb', 'c' ]
    
})
//-------
const myCoding = [
    {
        a:"a1",
        b:"a2"
    },
    {
        a:"c1",
        b:"d2"
    },
    {
        a:"e1",
        b:"f2"
    }

]
myCoding.forEach( (item)=> {
    console.log(item.a)
})

