const choices = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');


let playerScore = 0;
let computerScore = 0;


function game(playerChoice) {
    let player = playerChoice;
    let computer = computerChoice();

    playRound(player, computer);

    if (playerScore == 5) {
        document.querySelector('.winner').textContent = 'PLAYER IS THE ULTIMATE WINNER!'
        
    }

    else if (computerScore == 5) {
        document.querySelector('.winner').textContent = 'COMPUTER IS THE ULTIMATE WINNER!';
        
    }

    

}

function playRound(playerSelection, computerSelection) {
    console.log(`You selected: "${playerSelection}"`);
    console.log(`Computer selected: "${computerSelection}"`);

    // Tie 
    if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        document.querySelector('.game-result').textContent = "It's a tie! Play again!";
        document.querySelector('.game-result').style = "color:white"
    }
        
    // Player wins
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        document.querySelector('.game-result').textContent = 'Player wins!'
        document.querySelector('.playerScore').textContent = `Player score: ${playerScore}`
        document.querySelector('.game-result').style = "color:#aded74"
    } 
    // Computer wins
    else if ((playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        document.querySelector('.game-result').textContent = 'Computer wins!' 
        document.querySelector('.computerScore').textContent = `Computer score: ${computerScore}`
        document.querySelector('.game-result').style = "color:red"
        
    } 

        
}


function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}


rock.addEventListener('click', () => {
    game("rock");
});
paper.addEventListener('click', () => {
    game("paper");
});
scissors.addEventListener('click', () => {
    game("scissors");
});
reset.addEventListener('click', function () {
    location.reload();
});


game();
