//declare variables and their values are assigned by the functions below.
//these variables will hold strings corresponding to either rock, paper, scissors.
let playerChoice;
let computerChoice;
//string variable to pass from playRound() to game()
let score;
//integer variable to count number of games played.
let gameCount = 0;



//start the game!
game();




// FUNCTIONS BELOW


//function to get the player's choice via prompt. Player will type their choice
//which is received as a string and returned.
function getPlayerChoice() {
    let x = prompt("rock, paper or scissors?", "");
    let y = x.toLowerCase();
    console.log(`Player throws ${y}`)
    return y;
}


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
//with the results being logged in the console. The function utilizes
//two Switch Conditionals, 3 potential outcomes for each potential
//choice the player can make.
function playRound() {
    switch (playerChoice)  {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("Draw");
                    return "draw";
                    break;
                
                case "paper":
                    return "lose";
                    break;

                case "scissors":
                    return "win";
                    break;
            }
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    return "win";
                    break;
                
                case "paper":
                    console.log("Draw");
                    return "draw";
                    break;

                case "scissors":
                    return "lose";
                    break;
            }

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    return "lose";
                    break;
                
                case "paper":
                    return "win";
                    break;

                case "scissors":
                    console.log("Draw");
                    return "draw";
                    break;
            }
    }
}

//the following logic is to automatically play a set of 5 games
/*
function game(score)  {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i ++) {
        gameCount = i;
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        score = playRound();

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
    
} */