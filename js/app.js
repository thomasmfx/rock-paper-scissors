/* 
Create a function 'getComputerChoice' to make the computer play
Make this function return either 'rock', 'paper' or 'scissors'



*/

const gameOptions = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * gameOptions.length)
    if (randomChoice >= 0 && randomChoice < 1) {
        randomChoice = gameOptions[0]
    } else if (randomChoice >= 1 && randomChoice < 2) {
        randomChoice = gameOptions[1]
    } else {
        randomChoice = gameOptions[2]
    }
    return (randomChoice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == 'paper' && computerSelection == 'Rock') {
        return ('You won! Paper beats Rock!')
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return ('You lose! Paper beats Rock!')
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        return ('You won! Scissors beats Paper!')
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        return ('You lose! Scissors beats Paper!')
    } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        return ('You won! Rock beats Scissors!')
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        return ('You lose! Rock beats Scissors!')
    }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();