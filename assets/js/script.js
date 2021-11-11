// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userChoice = document.getElementById("user-choice-area");
const computerChoice = document.getElementById("computer-choice-area");
/**const userChoiceDisplay = document.createElement("");
const computerChoiceDisplay = document.createElement("");*/
const messages = document.getElementById("messages");
const choices = ["Rock", "Paper" , "Scissors"];


let result = document.getElementById("result-msg");
let rule = {
    'Rock' : {
        'Rock' : 'draw',
        'Scissors' : 'win',
        'Paper' : 'lose',
    },
    'Scissors': {
        'Rock' : 'lose',
        'Scissors' : 'draw',
        'Paper' : 'win',
    },
    'Paper' : {
        'Rock' : 'win',
        'Scissors' : 'lose',
        'Paper' : 'draw',
    }
}

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
 * The main game function
 */
function runGame(userChoice) {

    document.getElementById("message-user").innerHTML =
    `<h2>You choose <span>${userChoice}</span></h2>`;

    const num = Math.floor(Math.random() * 3);
    
    document.getElementById("message-computer").innerHTML = 
    `<h2>Computer choice is <span>${choices[num]}</span></h2>`;
 
    let computerSign = choices[num];

    switch(rule[userChoice][computerSign]) {
        case ('win'):
            result.innerHTML = 'You WIN';
            break;
        case ('lose'):
            result.innerHTML = 'You LOSE';
            break;
        default:
            result.innerHTML = "It's a DRAW";
            break;
        }
    
}


