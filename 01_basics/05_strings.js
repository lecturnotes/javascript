const name = "Smita"
const repoCount = 50
//console.log(name + repoCount + " Value")
console.log(`Hello, my name is ${name} and  repo count is ${repoCount}`)

const gameName = new String('smit-a-a-a')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))//checks char at position 2
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-6,4)
console.log(anotherString)

const newstringOne = "   smita123  "
console.log(newstringOne.trim()) //removes spaces

const url = "https://smita.com%20smit"
const newurl = url.replace('%20','-')
console.log(newurl) //replaced %20 with -
console.log(url.includes('fff'))
console.log(gameName.split('-'))
console.log(gameName.blink())