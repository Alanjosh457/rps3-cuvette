const choices = ["rock", "paper", "scissors"];
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;


playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "TIE UP";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOST";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOST";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOST";
                break;
        }
    }


    if (result === "YOU WIN") {
        playerScore++;
    } else if (result === "YOU LOST") {
        computerScore++;
    }

    
    localStorage.setItem('playerChoice', playerChoice);
    localStorage.setItem('computerChoice', computerChoice);
    localStorage.setItem('result', result);
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);

    
    window.location.href = 'result.html';
}

document.getElementById('rul').addEventListener('click', function() {
    const rulesSection = document.getElementById('rulesSection');
    const rulesBox = document.getElementById('rulesBox');

  
    if (rulesSection.style.display === 'none') {
        rulesSection.style.display = 'block';
        rulesBox.style.display = 'block';
    } else {
        rulesSection.style.display = 'none';
        rulesBox.style.display = 'none';
    }
});