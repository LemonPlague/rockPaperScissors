//declare variables and their values are assigned by the functions below.
//these variables will hold strings corresponding to either rock, paper, scissors.
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound();




// FUNCTIONS BELOW


//function to get the player's choice via prompt. Player will type their choice
//which is received as a string and returned.
function getPlayerChoice() {
    let x = prompt("Which do you choose?", "");
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
                    console.log("Aiko");
                    break;
                
                case "paper":
                    console.log("You Lose");
                    break;

                case "scissors":
                    console.log("You Win");
                    break;
            }
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You Win");
                    break;
                
                case "paper":
                    console.log("Aiko");
                    break;

                case "scissors":
                    console.log("You Lose");
                    break;
            }

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You Lose");
                    break;
                
                case "paper":
                    console.log("You Win");
                    break;

                case "scissors":
                    console.log("Aiko");
                    break;
            }
    }
}