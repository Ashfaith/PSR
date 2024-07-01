const result = document.querySelector(".result");
const score = document.querySelector(".score");

// Generates computer choice
const compBtn = document.querySelector(".compBtn");
const computerDisplay = document.querySelector(".computerDisplay");
const cmpDisplay = document.createElement("div");
let computerChoice;

compBtn.addEventListener('click', function() {
    // Checks if a display exists and removes it if button is pressed
    if (computerDisplay.contains(cmpDisplay)) {
        computerDisplay.removeChild(cmpDisplay);
    }
    // Generates a random number and converts it to string choice
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    computerChoice = numberToChoice[rand];

    // Adds text to display of computer choice
    cmpDisplay.textContent = `Computer has chosen!`;
    computerDisplay.appendChild(cmpDisplay);
});

// Gets human's choice
const btnChoice = document.querySelectorAll(".btnChoice");
const choiceDisplay = document.querySelector(".choiceDisplay");
const humanDisplay = document.createElement("div");
let humanChoice;

btnChoice.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (choiceDisplay.contains(humanDisplay)) {
            choiceDisplay.removeChild(humanDisplay);
        }
        humanChoice = e.target.value;
        console.log(humanChoice);

        humanDisplay.textContent = `Your choice is ${humanChoice}`;
        choiceDisplay.appendChild(humanDisplay);
    });
});

// Converts the computer's random number to a string
const numberToChoice = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
};

// Keeps current score
let humanScore = 0;
let computerScore = 0;

// Tests the choices against each other
const compare = document.querySelector(".compare");
const playAgain = document.querySelector(".play-again");

const resultDisplay = document.createElement("div");
compare.addEventListener('click', function() {
    if (result.contains(resultDisplay)) {
        result.removeChild(resultDisplay);
    }
    
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = `It's a tie!`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultDisplay.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    result.appendChild(resultDisplay);
    
    const scoreUpdate = document.createElement("div");
    scoreUpdate.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    if (score.lastChild) {
        score.removeChild(score.lastChild);
    }
    score.appendChild(scoreUpdate);

    swapButtons();
});

//toggle play-again button
function swapButtons() {
    compare.classList.toggle('hide');
    playAgain.classList.toggle('hide');
}

// Clear the game text when clicked
playAgain.addEventListener('click', function() {
    result.removeChild(resultDisplay);
    choiceDisplay.removeChild(humanDisplay);
    computerDisplay.removeChild(cmpDisplay);
    swapButtons();
});