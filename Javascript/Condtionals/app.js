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
else {
    console.log("You can't drive");
}

//assume one is not old enough to drive
let isRoadLegal = false; // boolean does change after checks

const ages =18;
const legalDrivingAges =17;

if (age> legalDrivingAge) {
    isRoadLegal =true
}
console.log ("Am I road legal?", isRoadLegal);