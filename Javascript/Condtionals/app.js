console.log("workshop");

const body= document.querySelector("body");
console.log(body);

if(1 > 0)
{console.log ("1 is greater than 0");
}

let age =10;
let legalDrivingAge = 17;

if(age > legalDrivingAge){
    console.log("You can drive");
}

//assume one is not old enough to drive
let isRoadLegal = false; // boolean does change after checks

const ages =18;
const legalDrivingAges =17; // we set age and legal driving age

if (age > legalDrivingAge) {
    isRoadLegal = true
}
console.log ("Am I road legal?", isRoadLegal);

let age1 = 10;
let legalDrivingAge1 = 17;

if (age1 > legalDrivingAge1) {
    console.log (" You can drive!");
} else {
    console.log (" You can't drive yet!");
}

//if ... else if... else
let age2 = 17;
let legalDrivingAge2 = 17;

if (age2 > legalDrivingAge2) {
  console.log("You're old enough to drive!");
} else if (age2 === legalDrivingAge2) {
  console.log("You're just old enough to drive!");
} else {
  console.log("You can't drive yet!");
}

//checking age for movie rating
let pgage = 17;
let movieRating = "PG";

if (pgage > 17) {
  console.log("You can watch any movie!");
} else if (pgage === 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  }
  // ...
}