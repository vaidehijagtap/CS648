/*eslint-env browser*/

//----------- The Rock, Paper, Scissors Game -----------------

//GLOBAL VARIABLES
var userChoice;
var compChoice;
var scoreUser;
var scoreComp;

function displayType() {
    "use strict";
    window.alert("Welcome to the Rock, Paper, Scissors Game!");
}


function playGame() {
    "use strict";
    var r;
        
    //PROMPT THE USER HIS CHOICE
    do {
    userChoice = window.prompt("What do you choose: Rock, Scissors or Paper? \n(Input a word in the field, please)").toUpperCase();
   
      if (userChoice !== "ROCK" && userChoice !== "SCISSORS" && userChoice !== "PAPER") {
            window.alert("Your choise was input incorrect. You should input one of the following: Rock, Scissors or Paper"); 
        } 
    } while (userChoice !== "ROCK" && userChoice !== "SCISSORS" && userChoice !== "PAPER");
    
    //COMPUTER RANDOM CHOICE
    r = Math.random();
    if (r < 0.33) {
        compChoice = "ROCK";
    } else if (r > 0.66) {
        compChoice = "SCISSORS";
    } else {
        compChoice = "PAPER";
    }
    
    //COMPARE CHOISES
    if (userChoice === compChoice) {
        window.alert("Tie! Nobody win!")
    } else if (userChoice === "ROCK" && compChoice === "SCISSORS" || userChoice === "SCISSORS" && compChoice === "PAPER" || userChoice === "PAPER" && compChoice === "ROCK") {
        scoreUser++;
        window.alert("You choose " + userChoice + "\nComputer choose " + compChoice + "\nYOU WIN!");
    } else {
        scoreComp++;
        window.alert("You choose " + userChoice + "\nComputer choose " + compChoice + "\nYOU LOSE!");
        
    }
}


function main() {
    "use strict"
    displayType();
    scoreComp = 0;
    scoreUser = 0;
    var playAgain = "y";  
    while (playAgain === "y") {
        playGame();
        window.alert("SCORE \nYou: " + scoreUser + "\nComputer: " + scoreComp);
        playAgain = window.prompt("Do you want to play again? (y/n)", "y");
    }
    window.alert("Thanks for playing the game!");
    if (scoreUser > scoreComp) {
        window.alert("You are winner! \nCONGRATULATIONS!");
    } else if (scoreUser < scoreComp) {
        window.alert("You are looser!");
    } else {
        window.alert("Nobody win! You and a computer both loosers!");
    }
}

main();
