<!-- Hi readmeday 9.mdaDay 9 Assignment: Basic Movie Ticket
System
Assignment 1: Create Movie Objects (Like Filling a Form)
Task:
1. Create a movie object with:
• Title
• Time
• Seats available
// movies.js
const movie1 = {
title: "Kalki",
time: "10AM",
seats: 60
};
const movie2 = {
title: "Pushpa 2",
time: "3PM",
seats: 60
};
Why?
• Objects help group related data (like a movie’s details).
Assignment 2: Display Movies (Like a Movie Poster)
Task:
1. Show movies on a webpage using JavaScript.
2. Create this HTML:
<!-- index.html -->
<!-- <!DOCTYPE html>
<html>
<body>
<div id="movies"></div>
<script src="movies.js"></script>
<script>
const moviesDiv = document.getElementById("movies");
// Simple way to display movies
moviesDiv.innerHTML = `
<h2>${movie1.title}</h2>
<p>Time: ${movie1.time}</p>
<p>Seats: ${movie1.seats}</p>
<h2>${movie2.title}</h2>
<p>Time: ${movie2.time}</p>
<p>Seats: ${movie2.seats}</p>
`;
</script>
</body>
<!-- </html> -->
What Happens?
• Movies appear on the page like posters on a wall.
React Basics
Assignment 1: Create a React App (Like Starting a New Project)
Task:
1. Install Node.js (from nodejs.org).
2. Open terminal and run:
npx create-react-app simple-movies
cd simple-movies
npm start
What Happens?
• A new React app opens in your browser at http://localhost:3000.
Assignment 2: Display Movies (Like a Digital Poster)
Task:
1. Replace the code in src/App.js:
function App() {
return (
<div>
<h1>Now Showing</h1>
<div className="movie">
<h2>Kalki</h2>
<p>Time: 10AM</p>
<p>Seats: 60</p>
</div>
</div>
);
}
Why?
• Learn to create simple components (like reusable posters).
GitHub Basics
Assignment: Save your work online.
1. Create a GitHub account (if you don’t have one).
2. Create a new repository named simple-movies(must)
3. Upload your code using GitHub Desktop or drag-and-drop.
Real-Life Comparison
• DOM = Bulletin Board:
• You pin/remove posters manually.
• React = Smart Board:
• Posters update automatically when something changes.
Success Checklist
1. Day 9:
• Created movie objects
• Displayed movies on a webpage
• Added a working "Book Seat" button
• Created a React app
• Displayed movie details
• Added a "Like" button
Why This Matters
1. Objects: Organize data (
    

+ movie details).
2. DOM: Show data on a webpage.
3. React: Build apps that update instantly (like Facebook/Instagram). --> -->