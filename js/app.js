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

    } else if (playerSelection == 'PAPER' && computerSelection == 'Paper') {
        result = "It's is a Tie!"
        alert(result)

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors') {
        result = "It's is a Tie!"
        alert(result)

    } else if (playerSelection == 'ROCK' && computerSelection == 'Scissors') {
        result = 'You won! Rock beats Scissors!'
        alert(result)
        playerPoints++;

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock') {
        result = 'You lose! Rock beats Scissors!'
        alert(result)
        computerPoints++;

    } else if (playerSelection == 'PAPER' && computerSelection == 'Rock') {
        result = 'You win! Paper beats Rock!'
        alert(result)
        playerPoints++;
    
    } else if (playerSelection == 'ROCK' && computerSelection == 'Paper') {
        result = 'You lose! Paper beats Rock!'
        alert(result)
        computerPoints++;

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Paper') {
        result = 'You won! Scissors beats Paper!'
        alert(result)
        playerPoints++;

    } else if (playerSelection == 'PAPER' && computerSelection == 'Scissors') {
        result = 'You lose! Scissors beats Paper!'
        alert(result)
        computerPoints++;
    }
}   

function playGame() {
    while (playerPoints < 5 || computerPoints < 5) {
        playRound()
        if (playerPoints == 5) {
            alert('Congratulations! You won the game!')
        } else if (computerPoints == 5) {
            alert('Damn, you lost...')
        }
    }
}

    // for (i = 1; i < 5; i++) {
    // if (result.includes('Won')) {
    //     playerPoints += 1;
    // } else if (result.includes('Lose')) {
    //     computerPoints += 1;
    // } else if (result.includes('Tie')) {
    //     //pass
    // }

