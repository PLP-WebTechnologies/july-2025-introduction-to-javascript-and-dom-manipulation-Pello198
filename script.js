// =====================================
// Part 1: Variables & Conditionals
// =====================================
let age = 22;
const name = "Alice";

if (age >= 18) {
    document.getElementById("ageCheck").textContent = name + " is an adult.";
} else {
    document.getElementById("ageCheck").textContent = name + " is a minor.";
}

// =====================================
// Part 2: Functions
// =====================================

// Function 1: Greeting function
function greet(userName) {
    return "Hello, " + userName + "!";
}

// Function 2: Square a number
function square(num) {
    return num * num;
}

// Using the functions
document.getElementById("greeting").textContent = greet("Bob");
document.getElementById("squareResult").textContent = "Square of 5 is " + square(5);

// =====================================
// Part 3: Loops
// =====================================
let loopList = document.getElementById("loopList");

// For loop example
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "For loop iteration: " + i;
    loopList.appendChild(li);
}

// While loop example
let j = 1;
while (j <= 3) {
    let li = document.createElement("li");
    li.textContent = "While loop iteration: " + j;
    loopList.appendChild(li);
    j++;
}

// =====================================
// Part 4: DOM Interactions
// =====================================

// Interaction 1: Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("demoText").textContent = "The text has been changed!";
});

// Interaction 2: Add new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("itemList").appendChild(newItem);
});

// Interaction 3: Show user input
document.getElementById("showInputBtn").addEventListener("click", function() {
    let input = document.getElementById("userInput").value;
    alert("You typed: " + input);
});
