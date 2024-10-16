const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash", "batman"]
//marvel_heros.push(dc_heros);
//console.log(marvel_heros[3][1])//flash
//console.log(marvel_heros.flat())
const newArr = marvel_heros.concat(dc_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(newArr) //gives result as above push method

const all_hero_array = [...marvel_heros, ...dc_heros]
console.log(all_hero_array) //gives output as concat method

const another_arr = [1,2,3,[4,5,6],7,[8,[0,11],10]]
console.log(another_arr.flat(Infinity))

console.log(Array.isArray("smita")) //false
console.log(Array.from("smita")) //[ 's', 'm', 'i', 't', 'a' ]
console.log(Array.from({'name':'smita'})) //[]

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))//[100,200,300]
