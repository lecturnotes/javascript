//Dates...
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //returns object

let myCreateDate = new Date(2024, 0, 3, 5, 3,10)// d,m,y h, i, s....0 = jan month
console.log(myCreateDate)
console.log(myCreateDate.toLocaleString())
let myCreateDatenew = new Date("01-24-2024")
console.log(myCreateDatenew.toLocaleString())

let myTimestamp = Date.now()
console.log(myTimestamp) //o/p in milisecs..

console.log(myCreateDatenew.getTime())//converts to milisec...

console.log(Math.floor(Date.now()/1000))//converts to secs...

let newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())//5 for friday

//to print full time
//`${newDate.getDay()}  / ${newDate.getMonth()+1}`

let showDate = newDate.toLocaleString('default', { //customizing format...ctrl+space -to show suggesation
    weekend: "full",
})
console.log(showDate)