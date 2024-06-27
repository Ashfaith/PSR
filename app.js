let humanScore = 0;
let computerScore = 0;

const display = document.querySelector(".display");

const compBtn = document.querySelector(".compBtn");
let computerChoice;
compBtn.addEventListener('click', function() {
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);

    computerChoice = numberToChoice[rand];

    const cmpDisplay = document.createElement("div");
    cmpDisplay.textContent = `Computer has chosen!`;
    display.appendChild(cmpDisplay);
});


const btnChoice = document.querySelectorAll(".btnChoice");
let humanChoice;
btnChoice.forEach((button) => {
    button.addEventListener('click', function(e) {
        humanChoice = e.target.value;
        console.log(humanChoice);

        
        const humanDisplay = document.createElement("div");
        humanDisplay.textContent = `Your choice is ${humanChoice}`;
        
        if (display.lastChild) {
            display.removeChild(display.lastChild);
        };
        display.appendChild(humanDisplay);
    });
});


// converts the computers random number to a string
const numberToChoice = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
};



//tests the choices against each other
const compare = document.querySelector(".compare");
compare.addEventListener('click', function() {
    const result = document.createElement("div");
    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie!`;
        display.appendChild(result);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        display.appendChild(result);
        humanScore++;
    } else {
        result.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
        display.appendChild(result);
        computerScore++;
    }
    const scoreUpdate = document.createElement("div");
    scoreUpdate.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    display.appendChild(scoreUpdate);
});







// function playGame() {
//     for(let i = 0 ; i < 5; i++){
//         playRound(getComputerChoice, getHumanChoice);
//     }
//     if (humanScore === computerScore){
//         console.log("It's a tie!");
//     }else if (humanScore > computerScore){
//         console.log(`You win with ${humanScore} out of 5!`)
//     } else {
//         console.log(`Computer wins with ${computerScore} out of 5!`)
//     }
// }