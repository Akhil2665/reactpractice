// Primitives (Single Values)
let movieName = "Sankrathi Vastunam"; // String
let rating = 4.5; // Number
let isBlockbuster = true; // Boolean

// Non-Primitives (Objects/Collections)
let movie = { 
  name: "Daku Maharaj", 
  genre: "Action" 
}; // Object

let showTimes = ["10AM", "2PM", "6PM"]; // Array


// Practice Exercise 1:

// Create movie object with array
let myMovie = {
  title: "Your Favorite Movie",
  actors: ["Actor1", "Actor2"],
  rating: 4.8,
  is3D: false
};

let budgetInRupees = 14286382225 ;

let myFavMovie = {
    title: 'INTERSTELLAR',
    actors: ['Matthew McConaughey','Anne Hathaway' ],
    rating: 4.9,
    isImax3d: true,
    budget: `${budgetInRupees} crores`
}

console.log(myFavMovie)

// #### 2. Creating Objects & Arrays


// 3 Ways to Create Objects
// 1. Literal Method (Most Common)
let movie1 = { 
  name: "Game Changer", 
  director: "Rajamouli" 
};

console.log(movie1)

// 2. Empty Object + Properties
let movie2 = {};
movie2.name = "RRR";
movie2.budget = "500Cr";
console.log(movie2)
// 3. From Existing Object
let movie3 = Object.create(movie1);
movie3.name = "Bahubali";

console.log(movie3.director, "")
console.log(movie3.name, "")
console.log(movie3)

// 3 Ways to Create Arrays
let prices = [250, 300, 400]; // Literal
let seats = new Array(60, 60, 60); // Constructor
let codes = Array.from("A12B34"); // From string

console.log(codes, prices, seats)

// Practice Exercise 2:

// Create theater object with arrays
let theater = {
  name: "PVR Cinemas",
  screens: ["Screen1", "Screen2"],
  facilities: ["AC", "Dolby Atmos"],
  showCount: 5,
  places: ['dilsukhnagar', "kukatpally", 'KPHB', 'Ameerpet', 'Panjagutta', 'Alwal']
};

console.log(a)
var a = '10' ;
console.log(a)
console.log('===============')
// console.log(b)
const b=20 ;

console.log(b)

console.log('===============')
// console.log(c)
let c=30 ;
console.log(c)