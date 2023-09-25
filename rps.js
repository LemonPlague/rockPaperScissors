//declare variables and their values are assigned by the functions below.
//these variables will hold strings corresponding to either rock, paper, scissors.
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();




//function to get the computer's choice. This function will randomly select a number
//between one and three, which are then returned as 
//1 - rock, 2 - paper, 3 - scissors. Finally, the computer choice will also be
//printed in the console so the player can also feel satisfied about the results.
function getComputerChoice () {
    
}

//function to get the player's choice via prompt. Player will type their choice
//which is received as a string and returned.
function getPlayerChoice() {
    let x = prompt("Which do you choose?", "");
    console.log(`Player throws ${x}`)
    return x;
}