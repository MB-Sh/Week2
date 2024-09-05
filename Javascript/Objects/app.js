console.log("Hello world!");

const person = {
    name: "Mary",
    age: 30,
    favouriteColour: "Blue",
  };
  console.log(person);
  console.table(person); //output in table form

  //Adding properties
  console.log(person.name);
  console.log(person.age);
  console.log(person.favouriteColour);

  person.favouriteFood= "Curry";
  console.log(person.favouriteFood);

  const car = {
    make: "Landrover",
    model: "Evoque",
    colour: "red",
  }
console.log(car.model);

const carDetails =`Car for Sale: A beautiful ${car.colour} ${car.make} ${car.model}!`;
console.log (carDetails);

