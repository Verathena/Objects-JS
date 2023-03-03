// QUESTION 1
// Using the constructor method, create an InstagramPost() constructor function
function InstagramPost(
  handleOfAuthor,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.handleofAuthor = handleOfAuthor;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}
// console.log(InstagramPost);

// QUESTION 2
// Create 2 Instagram post objects from the constructor function you created above

var firstPost = new InstagramPost(
  "@verathena",
  "It is such a beautiful morning",
  "www.thislinkgoesnowhere.com",
  34567,
  5675
);
var secondPost = new InstagramPost(
  "@verathena",
  "It is another beautiful day",
  "www.linktocatimage.com",
  4657,
  768
);

console.log(firstPost);
console.log(secondPost);

// QUESTION 3
// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.

function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location
  };
}
const personMusa = createPerson("Musa", 19, "Lagos");

// implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments.
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk
  };
}

// create an object representing Muse’s JAMB scores
const musaJambScores = createJambScores(70, 85, 82, 94);

// Add the object as a property to Musa object you created above in (a) above
personMusa.createJambScores = musaJambScores;
console.log(personMusa);

// QUESTION 4
// What are the different ways you can clone an object? Give examples for each of them.
// 1. Use the spread operator.
// 2. Call the Object.assign() function.
// 3. Use JSON parsing.
// 4. Use the structuredClone() function.

const data = { name: "Adeola", state: "Osun" }; //Spread Operator

const copy1 = { ...data };
const copy2 = Object.assign({}, data); //object.assign() function
const copy3 = JSON.parse(JSON.stringify(data)); //JSON Parsing
const copy4 = structuredClone(data); //structuredClone() function

// QUESTION 5
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 	’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar"
};

for (let [party, candidate] of Object.entries(presidentialCandidates)) {
  console.log(`${candidate} is the presidential candidate of ${party}.`);
}
