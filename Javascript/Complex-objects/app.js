console.log("Hello world!");

const book = {
    title: "My African Journey",
    author: {
      name: "Mary",
      age: 30,
      favouriteChapter: "family",
    },
    tags: ["school", "travel", "friends", "family"],
    content: "This is a book about an African girl finding her place in society.",
  };

  //Accessing properties
  console.log(book.author.name);
  console.log(book.tags[0]);
  console.log(book.tags.length);
  console.log (book.author.favouriteChapter);


  //combining with loop
  console.log(
    `There are ${book.tags.length} tags for post "${book.title}" my favourite chapter is "${book.author.favouriteChapter}":`
  ); // Output is: There are 4 tags for post "My African Journey" my favourite chapter is "family":

  for (let i = 0; i < book.tags.length; i++) {
    console.log(book.tags[i]); // output: school, travel, friends, family.
  }

  //I can also use this
  console.log(`Tags for post "${book.title}":`); 
for (let tag of book.tags) {
  console.log(tag); 
}