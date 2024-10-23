//javascript execution context
//{}->execution context 1
//function execution context
//Eval execution context

//{}- memory creation phase...memory allocates
//execution phase

//example code
let var1 = 10
let var2 = 5
function addNum(){
    let total = num1+ num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//explanation how above code executes...
//1-global execution->this
//2-memory phase (initially defines as below:)
  //val1 = undefined
  //val2 = undefined
  //addNum->defination
  //result1 = undefined
  //result2 = undefined
//3-execution phase
  //val1 = 10
  //val2= 5 
  //addNum  = creates new executional context(new variable environment+execution thread)->delete(after completion of work)
        //3-i ->memory phase
                //val1 = undefined
                //val2 = undefined
                //total = undefined
        //-ii ->execution phase
                //num1 = 10
                //num2 = 5
                //total =15 -returns in global execution context
  //while result2..
    //creates a new variable environment+execution thread
        //memory phase
          //val1 = undefined
          //val2 = undefined
          //total = undefined 
        //execution phase
          //num1 = 10
          //num2 = 2
          //total =12 -returns in global execution context               
  //N.B->as many times the function is called, there will be a newly created environment like  new variable environment+execution thread      

  //CALL STACK...
    //global execution
        //one() -once job done removed from global execution env.
        //if i have function one(), two(), three()- execution done like one(), them removed, then two(), then remove and so on.
        //but if two()is called inside one() and three() is called inside two()..one()->two()->three(), then all will be
        //inside global execution env. and removes according to LIFO -last in first out...which comes last removes first. 