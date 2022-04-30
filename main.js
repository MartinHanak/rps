function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    let result = "";
    switch (choice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
        default:
            result = undefined;
    }
    return result;
}


function playRound(playerSelection, computerSelection) {
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        result = "It is a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "Computer wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "Player wins!";
    } else {
        result = "There was a problem with the input parameters.";
    }
    return result;
}



function game() {
    let result = "";
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound(prompt("Your selection: "),computerPlay());
        if (result === "Player wins!") {
            playerScore += 1;
        } else if (result === "Computer wins!") {
            computerScore += 1;
        }
        console.log(result);
     }

    console.log("\n");

    let matchResult = "";
     if (playerScore > computerScore) {
        matchResult = "Player wins!";
     } else if (computerScore > playerScore) {
        matchResult = "Computer wins!";
     } else {
        matchResult = "It is a tie!";
     }

     console.log(matchResult);
}


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        const resultsDiv = document.querySelector('.results');
        resultsDiv.textContent = playRound(e.target.value,computerPlay());
    });
});