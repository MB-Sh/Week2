console.log ("Hello world!");
console.log (document);

const body =document.querySelector("body");
console.log(body);

const h1=document.createElement ("h1");
h1.textContent ="This is the heading !";
body.appendChild(h1);

const backgroundImage = document.createElement("img");
console.log(backgroundImage);
backgroundImage.src= "https://www.freecodecamp.org/news/content/images/2024/01/JavaScript--2-.png";
backgroundImage.alt= "learning DOM";
body.appendChild(backgroundImage);

//remove elements
backgroundImage.remove();












