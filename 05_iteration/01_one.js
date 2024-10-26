//for
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("Best no");
        
    }
    console.log(element)//1, 2 ....9
}

for(let i = 1; i<=10; i++){
    console.log(`Outer loop ${i}`)
    for(j=1; j<=10; j++){
        //console.log(`Outer loop ${i} and Inner loop ${j}`)
        console.log(i + '*'+ j + '=' + i*j);
        
    }
}

//for loop with array...
let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element) //o/p-flash batman superman
}

//break
for (let index = 1; index < 20; index++) {
    
    if(index == 5){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${index}`) 
}

//continue
for (let index = 1; index < 20; index++) {
    
    if(index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`)    
}