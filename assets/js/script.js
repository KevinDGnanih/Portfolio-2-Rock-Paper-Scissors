// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoice = document.getElementById("user-choice-area");
const computerChoice = document.getElementById("computer-choice-area");
const userChoiceDisplay = document.getElementById("");
const computerChoiceDisplay = document.getElementById("");
let computerMsg;
let userMsg;
const messages = document.getElementById("messages");
const choices = ["Rock", "Paper" , "Scissors"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener('click', function(){
        let userChoice = this.getAttribute("data-choice");
        runGame(userChoice);
    });
}

/**
 * The main game function. Accepts one parameter, Which 
 * is the data-choice value of the selected button
 */
function runGame(userChoice) {

    document.getElementById("message-user").innerHTML =
    `<h2>You choose <span>${userChoice}</span></h2>`;

    const num = Math.floor(Math.random() * 3);

    
    document.getElementById("message-computer").innerHTML = 
    `<h2>Computer choice is <span>${choices[num]}</span></h2>`;

    
    
   
    /*console.log(num);
    computerChoiceDisplay.innerHTML = computerChoice;*/
    
}


