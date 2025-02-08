// ### Part 2: DOM Basics (Afternoon Session)

// #### 1. DOM Tree Structure

// html

// #### 2. DOM Manipulation Basics

// 1. Select Element
let screenDiv = document.getElementById("screen");

// 2. Change Properties
screenDiv.style.backgroundColor = "black";
screenDiv.innerHTML = "<h2>Now Showing</h2>";

// 3. Create New Elements
let newButton = document.createElement("button");
newButton.textContent = "6PM Show";
screenDiv.appendChild(newButton);

