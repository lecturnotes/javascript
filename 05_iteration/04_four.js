const myObj1 = {
    'js': 'javascript',
    'cpp':'c++',
    'rb':'ruby',
    'sft':'swift by apple'
}
for(const obj in myObj1){
    console.log(obj); //returns all keys
    console.log(myObj1[obj]);//for values
}

//for array
const programming = ['java','php','rb','py','cpp']
for(const key in programming){
    console.log(programming[key]) //returns value
}
//for map in for-in loop
const map1 = new Map()
    map.set("a","aa")
    map.set("b","bb")
    map.set("c","cc")
    map.set("d","dd")
for(const val in map1){
    console.log(val); //not iteratable, so gives no result
    
}