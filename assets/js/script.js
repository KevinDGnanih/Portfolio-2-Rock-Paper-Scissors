// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoice = document.getElementById("user-choice-area");
const computerChoice = document.getElementById("computer-choice-area");
const userChoiceDisplay = document.getElementById("message");
const computerChoiceDisplay = document.getElementById("message");
let computerMsg;
let userMsg;
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
    `<h2>Computer choice is <span>${computerChoice}</span></h2>`;
    
    if (num === 0) {
        computerChoice = 'rock'
    }
    if (num === 1) {
        computerChoice = 'paper'
    }
    if (num === 2) {
        computerChoice = 'scissors'
    }
    console.log(num);
    computerChoiceDisplay.innerHTML = computerChoice;
    
}





