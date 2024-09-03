console.log("Cheers to learning function");


//function functionName (parameters- this is optional){ actions to Perform}

function helloTuesday()
{console.log ("Learning function on tuesday")}
//we need to call any function for it to perform a task.
helloTuesday();
helloTuesday();

function sayHelloTo (userName){
    console.log("Hello" + userName + "!"); 
}

sayHelloTo("Mary"); // this should appear on my console
sayHelloTo ("Vicky");


function greet(greeting, userName) {
    console.log(greeting + " " + userName +"!");
}
greet ("Good morning", "Liz");
greet ("Good morning", "Mark");
greet ("Good morning", "Gav");


// Returning values
function add(a,b) {
    return a+b;
}
const result =add(1,5);
console.log ("The result is", result);
const anotherResult = add(2,10);
console.log("Another result is", anotherResult); 

function substract(a,b) {
    return a-b;
}
const result1 = substract(1,5);
console.log ("The result for substaction is", result1);
const anotherResult1 = substract(2,10);
console.log("Another result is", anotherResult1); 


function multiply(a,b) {
    return a*b;
}
const result2 =multiply(1,5);
console.log ("The result for multiplication is", result2);
const anotherResult2 = multiply(2,10);
console.log("Another result is", anotherResult2); 


function divide(a,b) {
    return a/b;
}
const result3 =divide(1,5);
console.log ("The result for division is", result3);
const anotherResult3 = divide(2,10);
console.log("Another result is", anotherResult3); 



//function calculate(a,b, operator) {
//if (operator ==="+"){
    //return add (a,b);
//}
//else if (operator === "-"){
    //return substract( a,b);
//}
//else if (operator === "*"){
    //return multiply (a,b);
//}
//else if ( operator === "/");{
//    return divide (a,b);
//}


function calculate(a,b, operator) {
    switch (operator){
        case "+":
            return add (a,b);
        case "-":
            return substract (a,b);
        case "*":
            return multiply (a,b);
        case"/" :
        return divide (a,b);
        }
}
console.log (calculate(5,10, "+"));
console.log (calculate(20,10, "-"));
console.log (calculate(50,10, "*"));
console.log (calculate(8,2, "/"));


