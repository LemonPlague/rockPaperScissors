//declare variables and their values are assigned by the functions below.
//these variables will hold strings corresponding to either rock, paper, scissors.
let playerChoice = '';
let computerChoice = '';
//string variable to pass from playRound() to game()
let score = '';
//integer variable to count number of games played.
let gameCount = 0;

let playerScore = 0;
let computerScore = 0;


//get buttons so they can be used with addEventListener
const rpsButtons = document.querySelectorAll('.playerChoice');
//addEventListener so when they are clicked a round is played
//while player choice is determined by the clicked button.
rpsButtons.forEach(x => {
    x.addEventListener('click', function() {
        myFunction(this);        
    })
});

function myFunction(button) {
    playerChoiceDiv.textContent = `You throw ${button.textContent}`;
   playRound(button.textContent);
}

//get the div so that results can be displayed there instead of in console
const playerChoiceDiv = document.getElementById('playerChooses');
const cpuSChoice = document.getElementById('cpuChoice');
const roundDisplayDiv = document.getElementById('roundResult');
const runningScoreDiv = document.getElementById('runningScore');




//function to get the computer's choice. This function will randomly select a number
//between one and three, which are then returned as 
//1 - rock, 2 - paper, 3 - scissors. Finally, the computer choice will also be
//printed in the console so the player can also feel satisfied about the results.
function getComputerChoice () {
    let x = Math.floor((Math.random() * 3) + 1);
    switch (x) {
        case 1:
            cpuSChoice.textContent = `Computer throws rock`;
            return "rock"
            break;

        case 2:
            cpuSChoice.textContent = "Computer throws paper.";
            return "paper"                
            break;

        case 3:
            cpuSChoice.textContent = `Computer throws scissors`;
            return "scissors"                
            break;
    }
}

//This function will play a single round of Rock Paper Scissors
//with the results being logged in the console.
function playRound(playerChoice) {
    gameCount ++;
    computerChoice = getComputerChoice();


    switch (playerChoice)  {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    roundDisplayDiv.textContent = "Draw."
                    score = "draw";
                    break;
                
                case "paper":
                    roundDisplayDiv.textContent = "Surprise Mother Fucker. You Lose."
                    score = "lose";
                    break;

                case "scissors":
                    roundDisplayDiv.textContent = "Take your win and fuck right off!"
                    score = "win";
                    break;
            }
            break;
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    roundDisplayDiv.textContent = "Take your win and fuck right off!"
                    score = "win";
                    break;
                
                case "paper":
                    roundDisplayDiv.textContent = "Draw."
                    score = "draw";
                    break;

                case "scissors":
                    roundDisplayDiv.textContent = "Surprise Mother Fucker. You Lose."
                    score = "lose";
                    break;
            }
            break;

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    roundDisplayDiv.textContent = "Surprise Mother Fucker. You Lose."
                    score = "lose";
                    break;
                
                case "paper":
                    roundDisplayDiv.textContent = "Take your win and fuck right off!"
                    score = "win";
                    break;

                case "scissors":
                    roundDisplayDiv.textContent = "Draw."
                    score = "draw";
                    break;
            }
            break;
    }

    switch (score) {
        case "win":
            playerScore ++;
            runningScoreDiv.textContent = `You win round ${gameCount}`;
            break;

        case "lose":
            computerScore ++;
            runningScoreDiv.textContent = `You lose round ${gameCount}`;
            break;

        case "draw":
            runningScoreDiv.textContent = `Round ${gameCount} ends in a draw`;
            break;
    }
    
    
    switch (gameCount) {
        case 5:
            if (playerScore > computerScore) {
                runningScoreDiv.textContent = `Player is victorious with ${playerScore} of 5 wins!`;
            } else if (computerScore > playerScore) {
                runningScoreDiv.textContent = `Computer is victorious with ${computerScore} of 5 wins`;
            } else {
                runningScoreDiv.textContent = `Player has ${playerScore} wins, Computer has ${computerScore} wins. It's a draw.`;
            }
            break;
    }


}
