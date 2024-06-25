let humanScore = 0;
let computerScore = 0;

const compBtn = document.querySelector(".compBtn");
let computerChoice;
compBtn.addEventListener('click', function() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
});


const btnChoice = document.querySelectorAll(".btnChoice");
let humanChoice;
btnChoice.forEach((button) => {
    button.addEventListener('click', function(e) {
        humanChoice = e.target.value;
        console.log(humanChoice); 
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

if(!humanChoice || !computerChoice){
    console.log(`make your choice`)
}


const compare = document.querySelector(".compare");
compare.addEventListener('click', function() {
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