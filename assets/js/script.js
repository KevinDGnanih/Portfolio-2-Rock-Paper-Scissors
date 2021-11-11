// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoice = document.getElementById("game-area");
const userSign = document.getElementById("user-choice-area");
const computerSign = document.getElementById("computer-choice-area");
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

    userSign.src = `${choices[userChoice]}`;
    userSign.alt = choices[userChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    /*let result = checkWinner(choices[computerChoice], choices[userChoice]);*/

    /*updateScore(result);*/

}

/**
 * Determinate the winner
 */
let result = document.getElementById("result-area");
const rule = {
    rock: ["scissors"],

    paper: ["rock"],

    scissors: ["paper"],
};