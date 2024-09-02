console.log("Hello world!");
// Data type= Numbers
let number = 1 ;
console.log(number) ; // Output :1
console.log("The type of number is " + typeof number);
 // Output: The type of number is number
 
let mints= 10;
let chocolates =5;
let sweets =mints + chocolates;
console.log(sweets); //output :15

//Data type = Strings

let name = "Bob";
console.log(name)
console.log(typeof name);

let firstName ="Bob";
let lastName = " Smith";
let fullName = firstName + " " + lastName;
console.log (fullName); // Output: Bob Smith

//using Strings literal
let secondName ="Sam";
let maidenName = " Smith";
let middleName = `${secondName} ${maidenName}`
console.log (middleName); //Output: Sam Smith

let thirdName = "Imhotep";
console.log(`${thirdName} is ${thirdName.length} characters long`);
 

//Data type = Booleans
let isTrue = true;
console.log(isTrue); // Output: true

//Operator types to find out what type of data a variable contains
console.log(`The type of isTrue is ${typeof isTrue}`); 
// Output: The type of isTrue is boolean

let isFalse = false;
console.log(isFalse); // Output: false

//Undefined and null are special values in JavaScript. They're used to represent the absence of a value.
let unknownName;
console.log(unknownName); // Output: undefined

let age = null;
console.log(age); // Output: null

//Comparing Booleans
let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false

let month = "September";
let monthDay =3;
let year= 2024;
console.log(`Today is the ${monthDay} of ${month} , ${year}.`);
