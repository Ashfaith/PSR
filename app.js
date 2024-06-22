let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const rand = Math.floor(Math.random() * 3) + 1;
    return rand;
}

let btnChoice = document.querySelectorAll(".btnChoice");

btnChoice.forEach((button) => {
    button.addEventListener('click', function(e) {
        let choice = e.target.value; 
        console.log(choice);
    });
});



const choiceToNumber = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
}

const numberToChoice = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
};

function playRound(getComputerChoice, getHumanChoice){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    // converts the humans choice to a number
    let humanChoiceNumber = choiceToNumber[humanChoice];
    // converts the computers random number to a string
    let computerNumberChoice = numberToChoice[computerChoice];
    console.log(`Your choice is ${humanChoice}`);
    console.log(`Computer's choice is ${computerNumberChoice}`);
    //tests the choices against each other
    if (humanChoiceNumber === computerChoice){
        console.log("It's a tie!");
    }else if (humanChoiceNumber > computerChoice){
        console.log(`You win! ${humanChoice} beats ${computerNumberChoice}`);
        humanScore++;
    } else {
        console.log(`Computer wins! ${computerNumberChoice} beats ${humanChoice}`);
        computerScore++;
    }    
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
}

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