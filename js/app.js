const choiceBtns = document.querySelectorAll("button");
const scoreList = document.querySelector("#score");
const scoreHeading = document.querySelector("h2");

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
};

choiceBtns.forEach((choice) => {
    choice.addEventListener("click", () => {
        const result = document.createElement("li");
        const p = document.createElement("p");
        computerSelection = getComputerChoice();

        if (choice.textContent == 'Rock' && computerSelection == 'Rock') {
            roundResult = "It's a Tie!"
            p.textContent = roundResult
            scoreList.appendChild(p)
            scoreList.appendChild(result)
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
        }

        result.setAttribute("style", "list-style: none");
        p.setAttribute("style", "font-size: 18px; color: red");
    });
});




function playround(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper or Scissors?')
    playerSelection = playerSelection.toUpperCase()
    computerSelection = getComputerChoice();
    if (playerSelection == 'ROCK' && computerSelection == 'Rock') {
        roundResult = "It's a Tie!"
        // alert(roundResult)
        scoreList.appendChild(li)
        // 2 opcao: adicionar um span no li e o texto no span
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;

    } else if (playerSelection == 'PAPER' && computerSelection == 'Paper') {
        roundResult = "It's is a Tie!"
        // alert(roundResult)
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Scissors') {
        roundResult = "It's is a Tie!"
        // alert(roundResult)
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`

    } else if (playerSelection == 'ROCK' && computerSelection == 'Scissors') {
        roundResult = 'Round won! Rock beats Scissors!'
        // alert(roundResult)
        playerPoints++;
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`

    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Rock') {
        roundResult = 'Round lost! Rock beats Scissors!'
        // alert(roundResult)
        computerPoints++;
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`

    } else if (playerSelection == 'PAPER' && computerSelection == 'Rock') {
        roundResult = 'Round won! Paper beats Rock!'
        // alert(roundResult)
        playerPoints++;
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
    
    } else if (playerSelection == 'ROCK' && computerSelection == 'Paper') {
        roundResult = 'Round lost! Paper beats Rock!'
        // alert(roundResult)
        computerPoints++;
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
        
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'Paper') {
        roundResult = 'Round won! Scissors beats Paper!'
        // alert(roundResult)
        playerPoints++;
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`

    } else if (playerSelection == 'PAPER' && computerSelection == 'Scissors') {
        roundResult = 'Round lost! Scissors beats Paper!'
        // alert(roundResult)
        computerPoints++;
        scoreList.appendChild(li)
        li.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
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

