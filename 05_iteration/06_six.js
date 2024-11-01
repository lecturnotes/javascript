const myVar = [1,2,3,4,5,6]
const superVar = myVar.forEach( (item)=>{
    console.log(item);
    return item
})
console.log(superVar) //foreach doesn't return anything...only prints value
//-------------------------------------------------------------------------
const myNums = [2,3,4,5,6,7,8]
const newNum = myNums.filter( (num)=> num>4 )
//console.log(newNum)//[5,6,7,8]

//using {} for above example
const newNums1 = myNums.filter( (num)=>{
    num>4
})
console.log(newNums1)

//using foreach...
const newArr = []
myNums.forEach( (num)=> {
    if(num>4){
        newArr.push(num)
    }else{
        //
    }
})
console.log(newArr)//[5,6,7,8]
//---------------------------------

const books = [
    {title:'Book one', genre:'Fiction', publish:1981, edition:2004},
    {title:'Book two', genre:'NON-Fiction', publish:1985, edition:2006},
    {title:'Book three', genre:'History', publish:2000, edition:2010},
    {title:'Book four', genre:'History', publish:2001, edition:2009},
    {title:'Book five', genre:'Math', publish:2140, edition:2005},
    {title:'Book six', genre:'Geology', publish:2150, edition:2006},
    {title:'Book seven', genre:'NON-Fiction', publish:2014, edition:2007}
];
 const userBooks = books.filter( (bk)=> bk.genre=='History')
 const userBooks1 = books.filter( (bk1)=> {
    return bk1.publish>2000 && bk1.genre=='History' //use return while strating a scope {...}
})
 console.log(userBooks1)