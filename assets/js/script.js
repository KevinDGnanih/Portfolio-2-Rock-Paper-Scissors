// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoice = document.getElementById("user-choice-area");
const computerChoice = document.getElementById("computer-choice-area");
const messages = document.getElementById("messages");
const choices = ["rock", "paper" , "scissors"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener('click', function(e){
        let userChoice = this.getAttribute("data-choice");
        runGame(userChoice);
    });
}

/**
 * The main game function. Accepts one parameter, Which 
 * is the data-choice value of the selected button
 */
function runGame(userChoice) {

    let num = Math.floor(Math.random() * 3);

    document.getElementById("message").innerHTML = 
    `<h2>Your choice is <span>${userChoice}</span></h2>`;
    document.getElementById("message").innerHTML = 
    `<h2>Computer choice is <span>${computerChoice}</span></h2>`;
    console.log(num);

    if (num === 0) {
        computerChoice = 'rock'
    }
    if (num === 1) {
        computerChoice = 'paper'
    }
    if (num === 2) {
        computerChoice = 'scissors'
    }
    
    
}





