function greetUser (){
    console.log ("Hello world !");
}
greetUser();

// myName = "DAve" is declare outside the scope ad a globe variable
//const myName = "Dave"; 

function sayHello(){
    console.log ( "hello" + " " + myName + "!");
}
sayHello();

// creating variables
function sayHello (){
    const myName= "Dave";
    console.log( "hello" + " " + myName + "!");
}

sayHello(); // Output: Hello Dave!

console.log(myName); // Output: Uncaught ReferenceError: name is not defined


