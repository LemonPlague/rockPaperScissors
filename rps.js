//declare variables and their values are assigned by the functions below.
//these variables will hold strings corresponding to either rock, paper, scissors.
let playerChoice ;
let computerChoice;
//string variable to pass from playRound() to game()
let score;
//integer variable to count number of games played.
let gameCount = 0;

game();




// FUNCTIONS BELOW


//function to get the player's choice via prompt. Player will type their choice
//which is received as a string and returned.
function getPlayerChoice() {
    //let x = prompt("Which do you choose?", "");
    //let y = x.toLowerCase();
    let x = toLowerCase(prompt(`rock, paper, or scissors?`, `Game ${gameCount}`));
    console.log(`Player throws ${x}`)
    return x;
}


//function to get the computer's choice. This function will randomly select a number
//between one and three, which are then returned as 
//1 - rock, 2 - paper, 3 - scissors. Finally, the computer choice will also be
//printed in the console so the player can also feel satisfied about the results.
function getComputerChoice () {
    let x = Math.floor((Math.random() * 3) + 1);
    switch (x) {
        case 1:
                return "rock"
                console.log(`Computer throws rock`);
                break;

        case 2:
                return "paper"
                console.log(`Computer throws paper.`);
                break;

        case 3:
                return "scissors"
                console.log(`Computer throws scissors`);
                break;
    }
}

//This function will play a single round of Rock Paper Scissors
//with the results being logged in the console. The function utilizes
//two Switch Conditionals, 3 potential outcomes for each potential
//choice the player can make.
function playRound(computerChoice, playerChoice) {
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

//initialize two new variables that are used to keep track of both player and
//computer scores individually. Next is a for loop which will play 5 games and
//track the results of each game, adding up either the player's score or the 
//computer's score after each round is played. Finally at the end of the 5th
//round the final score is presented in the console.
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
}