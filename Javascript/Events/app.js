console.log("test");
console.log (document);
console.log ();

const myButton= document.querySelector ( "button");
console.log(myButton);

function handleClick () {
    console.log(" You have clicked the button");
}

myButton.addEventListener ("click", handleClick);
const myCountButton = document.getElementById
("count-button");

let clicks =0;

function handleCounting (){
    clicks = clicks + 1 ;
    console.log(clicks);
    myCountButton.textContent = `You have clicked ${clicks}`;
    // or concatenante like this "You have clicked" + clicks
    }

myCountButton.addEventListener("click", handleCounting);




