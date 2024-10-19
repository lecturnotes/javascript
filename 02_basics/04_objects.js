//singleton or using constructor

//const tinderUser = new Object(); //{}
//console.log(tinderUser);

const tinderUser={}
tinderUser.id="123"
tinderUser.name="Smita"
tinderUser.isLoggedin=false
console.log(tinderUser)//{ id: '123', name: 'Smita', isLoggedin: false }

const regularUser = {
    email:"sm@gmail.com",
    fullname:{
        userfullname:{
            firstname:"smita",
            lastname:"mishra"
        }

    }
}
console.log(regularUser.fullname.userfullname.firstname) //smita

const obj1={1:"a", 2:"b"}//source
const obj2={3:"a", 4:"b"}//source
const obj4={5:"a", 6:"b"}//source
//const obj3= Object.assign({},obj1,obj2,obj4) //{}-target
const obj3 = {...obj1,...obj2}//another method to combine like above
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'b', '4': 'b' }

const user = [
    {
        id:1,
        email:"ss@gmail.com"
    },
    {
        id:2,
        email:"sg@gmail.com"
    },
    {
        id:3,
        email:"sj@gmail.com"
    },
]

user[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser))//[ '123', 'Smita', false ]
console.log(Object.entries(tinderUser))//[ [ 'id', '123' ], [ 'name', 'Smita' ], [ 'isLoggedin', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedin'))//true

const course = {
    coursename: "javascript",
    price:"999",
    courseInstructor: "smita"
}
//console.log(course.courseInstructor)
const {courseInstructor:instruct}=course //const {} = object name
console.log(instruct)//smita

//apis

//json format api return
// {
//     "coursename": "js",
//     "name": "smita",
//     "price": "free"
// }

//also api reruns in array format like
[
    {},
    {},
    {}
]