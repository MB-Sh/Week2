console.log("Hello world!");

const button= document.querySelector("button");

console.log (button.textContent);

button.addEventListener("click", function (event) {
    console.log(event);
});

button.addEventListener("mouseover", function () {
    console.log("Mouse is over the button!");
});





