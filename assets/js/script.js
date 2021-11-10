// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("user-choice-area");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoice = document.getElementById("game-area");
const messages = document.getElementById("messages");
const choices = ["rock", "paper" , "scissors"];

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

    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()) * 3;

    let userselected = ()
    document.getElementsByClassName("computer-choice-area").innerHTML = "coucou";
    document.getElementById("user-choice-area").innerHTML = ;

}