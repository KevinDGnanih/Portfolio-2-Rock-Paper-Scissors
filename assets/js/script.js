// Declare constants for DOM elements
// Possible choices

const buttons = document.getElementsByClassName("choice");
const userScore = document.getElementById("user-score-span");
const computerScore = document.getElementById("computer-score-span");
const userChoice = document.getElementById("user-choice-area");
const computerChoice = document.getElementById("computer-choice-area");
const computerSignsDisplay = document.getElementById("computer-sign");
const msgUser = document.getElementById("message-user");
const msgComputer = document.getElementById("message-computer");
const messages = document.getElementById("messages");
const choices = ["Rock", "Paper" , "Scissors"];
let selected = false;

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
    
    // Give the user information of sign selected
    document.getElementById("message-user").innerHTML =
    `<h2 id="msg-user">You choose <span>${userChoice}</span></h2>`;

    // Let the computer select a sign
    const num = Math.floor(Math.random() * 3);
    
    // Give the computer information of sign selected
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


    //Designating the winner and display messages
    switch(rule[userChoice][computerSign]) {
        case ('win'):
            result.innerHTML = 'You WIN';
            result.classList.remove('lose-color', 'draw-color');
            result.classList.add('win-color');
            incrementUserScore();
            break;
        case ('lose'):
            result.innerHTML = 'You LOSE';
            result.classList.remove('win-color', 'draw-color');
            result.classList.add("lose-color");
            incrementComputerScore();
            break;
        default:
            result.innerHTML = "It's a DRAW";
            result.classList.remove('win-color', 'lose-color');
            result.classList.add('draw-color');
            break;
    }

    setTimeout(() => {
        document.getElementById('result-msg').innerHTML = '';
        result.classList.remove('win-color', 'lose-color', 'draw-color');
        selected = true;
    }, 3000);

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
let reset = document.getElementById("reset-btn").onclick = function reset() {
    computerScore.innerHTML = "0";
    userScore.innerHTML = "0";
    msgUser.innerHTML = "";
    msgComputer.innerHTML = "";
    result.innerHTML = "";
    result.classList.remove('win-color', 'lose-color', 'draw-color');
    computerSignsDisplay.innerHTML = `
    <i class="fas fa-question-circle"></i>`;       
}