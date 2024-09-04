const blogPosts = [
    "My first blog post",
    "My second blog post",
   "My third blog post",
];
console.log(blogPosts);

//Accessing items

console.log(blogPosts[0]); // Output: My first blog post
console.log(blogPosts[1]); // Output: My second blog post
console.log(blogPosts[2]); // Output: My third blog post

//Adding items
blogPosts[3] = "My fourth blog post";
console.log (blogPosts[3]);

//Favourite food
const favouriteFood = [
  "popcorn", "cashew" 
];
//pushing items
favouriteFood.push( "Spagbol", "Noodles", "Lamb", "Soups"); 
console.log(favouriteFood);

//adding items
favouriteFood [2] = "Custard";
console.log(favouriteFood[2]);
console.log(favouriteFood.length);
favouriteFood [8]="Casserole";
console.log(Object.keys(favouriteFood));

