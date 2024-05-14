const choiceBtns = document.querySelectorAll("button");
const scoreList = document.querySelector("#score");
const scoreBoard = document.querySelector("h3");

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
    
    return randomChoice;
};

choiceBtns.forEach((choice) => {
    choice.addEventListener("click", () => {
        const result = document.createElement("li");
        const p = document.createElement("p");
        computerSelection = getComputerChoice();

        // round tied
        if (choice.value == computerSelection) {
            roundResult = "It's a Tie!"
            p.textContent = roundResult
            scoreList.insertBefore(p, scoreList.firstElementChild)
            p.setAttribute("style", "font-size: 18px; color: #ffc300");
            scoreBoard.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
        }

        // round won
        if (
            (choice.value == 'Rock' && computerSelection == 'Scissors') ||
            (choice.value == 'Paper' && computerSelection == 'Rock') ||
            (choice.value == 'Scissors' && computerSelection == 'Paper')

        ) {    
            roundResult = `Round won! ${choice.value} beats ${computerSelection}!`
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            playerPoints++;
            p.setAttribute("style", "font-size: 18px; color: #80b918");
            scoreBoard.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
        }

        // round lost
        if ( 
            (choice.value == 'Scissors' && computerSelection == 'Rock') ||
            (choice.value == 'Rock' && computerSelection == 'Paper') ||
            (choice.value == 'Paper' && computerSelection == 'Scissors')
        ) {
            roundResult = `Round lost! ${computerSelection} beats ${choice.value}!`
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            computerPoints++;
            p.setAttribute("style", "font-size: 18px; color: #ef233c");
            scoreBoard.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
        }

        // check score
        if (playerPoints == 5) {
            while (score.firstChild) {
                score.firstChild.remove()
            }
            playerPoints = 0;
            computerPoints = 0;
            p.textContent = "You won!"
            scoreList.insertBefore(p, scoreList.firstElementChild)
            p.setAttribute("style", "font-size: 48px; color: #80b918")
        } else if (computerPoints == 5) {
            while (score.firstChild) {
                score.firstChild.remove()
            }
            playerPoints = 0;
            computerPoints = 0;
            p.textContent = "Oops... You lost!"
            scoreList.insertBefore(p, scoreList.firstElementChild)
            p.setAttribute("style", "font-size: 48px; color: #ef233c")
        }
    });
});