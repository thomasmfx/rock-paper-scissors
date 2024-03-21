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

function playRound(result, playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper or Scissors?')
    playerSelection = playerSelection.toUpperCase()
    computerSelection = getComputerChoice();
    if (playerSelection == 'ROCK' && computerSelection == 'Rock') {
        result = "It's a Tie!"

    } else if (playerSelection == 'PAPER' && computerSelection == 'Paper') {
        result = "It's is a Tie!"

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors') {
        result = "It's is a Tie!"

    } else if (playerSelection == 'ROCK' && computerSelection == 'Scissors') {
        result = 'You won! Rock beats Scissors!'

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock') {
        result = 'You lose! Rock beats Scissors!'

    } else if (playerSelection == 'PAPER' && computerSelection == 'Rock') {
        result = 'You win! Paper beats Rock!'
    
    } else if (playerSelection == 'ROCK' && computerSelection == 'Paper') {
        result = 'You lose! Paper beats Rock!'

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Paper') {
        result = 'You won! Scissors beats Paper!'

    } else if (playerSelection == 'PAPER' && computerSelection == 'Scissors') {
        result = 'You lose! Scissors beats Paper!'
    }

    return(result)
}