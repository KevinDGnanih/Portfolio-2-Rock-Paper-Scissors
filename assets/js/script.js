// Declare constants for DOM elements
// Possible choices
// Get the button elements and event listeners to them

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score-span");
const computerScore = document.getElementById("computer-score-span");
const userChoice = document.getElementById("user-choice-area");
const computerChoice = document.getElementById("computer-choice-area");
const computerSignsDisplay = document.getElementById("computer-sign");
const msgUser = document.getElementById("message-user")
const msgComputer = document.getElementById("message-computer")
/**const userChoiceDisplay = document.createElement("");
const computerChoiceDisplay = document.createElement("");*/
const messages = document.getElementById("messages");
const choices = ["Rock", "Paper" , "Scissors"];


//Setting the rule of the game and the result variable
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
    `<h2 id="msg-user">You choose <span>${userChoice}</span></h2>`;

    const num = Math.floor(Math.random() * 3);
    
    document.getElementById("message-computer").innerHTML = 
    `<h2 id="msg-computer">Computer choice is <span>${choices[num]}</span></h2>`;

    let computerSign = choices[num];
    
    if (computerSign == 'Rock') {
        computerSignsDisplay.innerHTML = `<i aria-label="Rock" id="rock"class="fas fa-meteor"></i>`;
    } else if (computerSign == 'Paper') {
        computerSignsDisplay.innerHTML = `<i aria-label="Paper sign" id="paper" class="fas fa-paper-plane"></i>`;
    } else if (computerSign == 'Scissors') {
        computerSignsDisplay.innerHTML = `<i aria-label="Scissors sign" id="scissors"class="fas fa-fan"></i>`;
    }

    
    switch(rule[userChoice][computerSign]) {
        case ('win'):
            result.style.cssText = 
            `color: rgb(68, 83, 97);
            background-color: yellowgreen; 
            border-radius: inherit; 
            width: 180px; 
            padding: 2px 0; 
            margin: 30px auto;`;
            result.innerHTML = 'You WIN';
            incrementUserScore();
            break;
        case ('lose'):
            result.style.cssText = 
            `background-color: tomato;
            color: rgb(68, 83, 97);
            border-radius: inherit; 
            width: 180px; 
            padding: 2px 0; 
            margin: 30px auto;`;
            result.innerHTML = 'You LOSE';
            incrementComputerScore()
            break;
        default:
            result.style.cssText = 
            `color: rgb(68, 83, 97);
            background-color: wheat;
            border-radius: inherit; 
            width: 180px; 
            padding: 2px 0; 
            margin: 30px auto;`;
            result.innerHTML = "It's a DRAW";
            break;
    }

}

// Incrementing scores for the User and Computer
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("user-score-span").innerHTML);
    document.getElementById("user-score-span").innerHTML = ++oldScore;
}

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score-span").innerHTML);
    document.getElementById("computer-score-span").innerHTML = ++oldScore;
}




//Reset the game from the beginning
document.getElementById("reset-btn").onclick = function() {
    computerScore.innerHTML = "0";
    userScore.innerHTML = "0";
    msgUser.innerHTML = "";
    msgComputer.innerHTML = "";
    result.style.cssText = `
    color: #80B59B;
    background-color: #80B59B; 
    border-radius: inherit; 
    width: 180px; 
    padding: 2px 0; 
    margin: 30px auto;`;
    computerChoice.innerHTML = `
        <div id="computer-choice-area">
            <p id="computer-sign" aria-label="Computer question mark">
                <span><i class="fas fa-question-circle"></i></span>
            </p>    
        </div>`;
    
}


