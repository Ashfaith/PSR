const result = document.querySelector(".result");
const score = document.querySelector(".score");
const playAgainBtn = document.getElementById('play-again-btn');

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
const nextRound = document.querySelector(".next-round");

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
    checkGameEnd();
});

//toggle play-again button
function swapButtons() {
    compare.classList.toggle('hide');
    nextRound.classList.toggle('hide');
}

// Clear the game text when clicked
nextRound.addEventListener('click', function() {
    result.removeChild(resultDisplay);
    choiceDisplay.removeChild(humanDisplay);
    computerDisplay.removeChild(cmpDisplay);
    swapButtons();
});

playAgainBtn.addEventListener('click', function() {
    window.location.reload()
})

let winner;
function checkGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        winner = humanScore === 5 ? 'player' : 'computer';
        resultDisplay.textContent = `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins!`;
        result.append(resultDisplay);

        // Disable the buttons to prevent further gameplay
        compBtn.disabled = true;
        btnChoice.forEach(button => button.disabled = true);
        compare.disabled = true;

        // Show play again button
        playAgainBtn.classList.remove('hide');
        nextRound.classList.toggle('hide');
        
    }
    if (winner === 'human'){
        humanWin();
    }
}


function humanWin() {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 30,
          scalar: 1.2,
          shapes: ["circle", "square"],
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });
      
        confetti({
          ...defaults,
          particleCount: 20,
          scalar: 2,
          shapes: ["emoji"],
          shapeOptions: {
            emoji: {
              value: ["🦄", "🌈"],
            },
          },
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}