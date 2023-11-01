//declare variables and their values are assigned by the functions below.
//these variables will hold strings corresponding to either rock, paper, scissors.
let playerChoice;
let computerChoice;
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
   playRound(button.textContent)
}

//get the div so that results can be displayed there instead of in console
const resultDisplayDiv = document.querySelector('div');


//start the game!
//game();




//function to get the player's choice via prompt. Player will type their choice
//which is received as a string and returned.
/*
function getPlayerChoice() {
    let x = prompt("rock, paper or scissors?", "");
    let y = x.toLowerCase();
    console.log(`Player throws ${y}`)
    return y;
} 
*/


//function to get the computer's choice. This function will randomly select a number
//between one and three, which are then returned as 
//1 - rock, 2 - paper, 3 - scissors. Finally, the computer choice will also be
//printed in the console so the player can also feel satisfied about the results.
function getComputerChoice () {
    let x = Math.floor((Math.random() * 3) + 1);
    switch (x) {
        case 1:
            console.log(`Computer throws rock`);
            return "rock"
            break;

        case 2:
            console.log("Computer throws paper.");
            return "paper"                
            break;

        case 3:
            console.log(`Computer throws scissors`);
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
                    resultDisplayDiv.textContent = "Draw."
                    score = "draw";
                    break;
                
                case "paper":
                    resultDisplayDiv.textContent = "Surprise Mother Fucker. You Lose."
                    score = "lose";
                    break;

                case "scissors":
                    resultDisplayDiv.textContent = "Take your win and fuck right off!"
                    score = "win";
                    break;
            }
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    resultDisplayDiv.textContent = "Take your win and fuck right off!"
                    score = "win";
                    break;
                
                case "paper":
                    resultDisplayDiv.textContent = "Draw."
                    score = "draw";
                    break;

                case "scissors":
                    resultDisplayDiv.textContent = "Surprise Mother Fucker. You Lose."
                    score = "lose";
                    break;
            }

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    resultDisplayDiv.textContent = "Surprise Mother Fucker. You Lose."
                    score = "lose";
                    break;
                
                case "paper":
                    resultDisplayDiv.textContent = "Take your win and fuck right off!"
                    score = "win";
                    break;

                case "scissors":
                    resultDisplayDiv.textContent = "Draw."
                    score = "draw";
                    break;
            }
    }

    switch (score) {
        case "win":
            playerScore ++;
            console.log(`You win round ${gameCount}`)
            break;

        case "lose":
            computerScore ++;
            console.log(`You lose round ${gameCount}`)
            break;
    }
    
    
    switch (gameCount) {
        case 5:
            if (playerScore > computerScore) {
                console.log(`Player is victorious with ${playerScore} of 5 wins!`);
            } else if (computerScore > playerScore) {
                console.log(`Computer is victorious with ${computerScore} of 5 wins`);
            } else {
                console.log(`Player has ${playerScore} wins, Computer has ${computerScore} wins. It's a draw.`)
            }
            break;
    }


}
