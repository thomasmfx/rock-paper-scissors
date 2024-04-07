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

function checkResult(roundResult) {
    if (roundResult.includes("won")) {
        playerPoints++;
    } else if (roundResult.includes("lost")) {
        computerPoints++;
    }
}

choiceBtns.forEach((choice) => {
    choice.addEventListener("click", () => {
        const result = document.createElement("li");
        const p = document.createElement("p");
        computerSelection = getComputerChoice();

        if (choice.textContent == 'Rock' && computerSelection == 'Rock') {
            roundResult = "It's a Tie!"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: orange");

        } else if (choice.textContent == 'Paper' && computerSelection == 'Paper') {
            roundResult = "It's a Tie!"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: orange");

        } else if (choice.textContent == 'Scissors' && computerSelection == 'Scissors') {
            roundResult = "It's a Tie!"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: orange");

        } else if (choice.textContent == 'Rock' && computerSelection == 'Scissors') {
            roundResult = "Round won! Rock beats Paper!"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            playerPoints++;
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: green");

        } else if (choice.textContent == 'Scissors' && computerSelection == 'Rock') {
            roundResult = "Round lost! Rock beats Scissors!"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            computerPoints++;
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: red");

        } else if (choice.textContent == 'Paper' && computerSelection == 'Rock') {
            roundResult = "Round won! Paper beats Rock"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            playerPoints++;
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: green");

        } else if (choice.textContent == 'Rock' && computerSelection == 'Paper') {
            roundResult = "Round lost! Paper beats Rock"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            computerPoints++;
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: red");

        } else if (choice.textContent == 'Scissors' && computerSelection == 'Paper') {
            roundResult = "Round won! Scissors beats Paper"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            playerPoints++;
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: green");

        } else if (choice.textContent == 'Paper' && computerSelection == 'Scissors') {
            roundResult = "Round lost! Scissors beats Paper"
            p.textContent = roundResult
            scoreList.insertBefore(result, scoreList.firstElementChild)
            scoreList.insertBefore(p, scoreList.firstElementChild)
            computerPoints++;
            result.textContent = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`;
            p.setAttribute("style", "font-size: 18px; color: red");
        }

        if (playerPoints == 5) {
            playerPoints = 0;
            computerPoints = 0;
            p.textContent = "Congratulations! You won!"
            scoreList.insertBefore(p, scoreList.firstElementChild)
            p.setAttribute("style", "font-size: 48px; color: green")
        } else if (computerPoints == 5) {
            playerPoints = 0;
            computerPoints = 0;
            p.textContent = "Oh oh... You lost!"
            scoreList.insertBefore(p, scoreList.firstElementChild)
            p.setAttribute("style", "font-size: 48px; color: red")
        }

        result.setAttribute("style", "list-style: none");
    });
});
