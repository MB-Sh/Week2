console.log("Hello world!");

for (let i = 0; i < 5 ; i ++){
    console.log ("Iteration", i);
}
//the ouput is :
//Iteration 0
//Iteration 1
//Iteration 2
//Iteration 3
//Iteration 4

//The While loops
let  counter =1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
//Output :
//1
//2
//3
//4
//5

let keeplogging =true;
let i = 0;
while (keeplogging === true){
    console.log("Iteration", i);

    if (Math.random() < 0.1) // set keep looging to 10% chance
    {keeplogging = false;

    }
 i++;
}


//Loop Over Arrays
const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

//Alternative syntax fro loops and arrays
const foodies = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foodies) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}