const gameOptions = ['Rock', 'Paper', 'Scissors'];
let playerPoints = 0;
let computerPoints = 0;

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
    playerSelection = prompt('Rock, Paper or Scissors?')
    playerSelection = playerSelection.toUpperCase()
    computerSelection = getComputerChoice();
    if (playerSelection == 'ROCK' && computerSelection == 'Rock') {
        result = "It's a Tie!"
        alert(result)
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)

    } else if (playerSelection == 'PAPER' && computerSelection == 'Paper') {
        result = "It's is a Tie!"
        alert(result)
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors') {
        result = "It's is a Tie!"
        alert(result)
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)

    } else if (playerSelection == 'ROCK' && computerSelection == 'Scissors') {
        result = 'Round won! Rock beats Scissors!'
        alert(result)
        playerPoints++;
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock') {
        result = 'Round lost! Rock beats Scissors!'
        alert(result)
        computerPoints++;
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)

    } else if (playerSelection == 'PAPER' && computerSelection == 'Rock') {
        result = 'Round won! Paper beats Rock!'
        alert(result)
        playerPoints++;
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)
    
    } else if (playerSelection == 'ROCK' && computerSelection == 'Paper') {
        result = 'Round lost! Paper beats Rock!'
        alert(result)
        computerPoints++;
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)
        
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Paper') {
        result = 'Round won! Scissors beats Paper!'
        alert(result)
        playerPoints++;
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)

    } else if (playerSelection == 'PAPER' && computerSelection == 'Scissors') {
        result = 'Round lost! Scissors beats Paper!'
        alert(result)
        computerPoints++;
        alert(`Player Points: ${playerPoints} | Computer Points: ${computerPoints}`)
    }

}   

function playGame() {
    while (playerPoints < 5 || computerPoints < 5) {
        playRound()
        if (playerPoints == 5) {
            alert('Congratulations! You won the game!')
            break;
        } else if (computerPoints == 5) {
            alert('You lost. Gamer Over!')
            break;
        }
    }
}

