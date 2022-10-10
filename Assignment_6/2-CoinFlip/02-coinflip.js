var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Kindly select Heads (H) or Tails (T):");

isHeads = Boolean (coinFlip > 7);
isUserChoiceHeads = Boolean (choice.toUpperCase() == "H" || choice.toLowerCase() == "heads");
isUserChoiceTails = Boolean (choice.toUpperCase() == "T" || choice.toLowerCase() == "tails");

if (isHeads) {
    if (isUserChoiceHeads) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (isUserChoiceTails) {
        window.alert("The flip was heads but you chose tails...you lose!");
    } else {
        window.alert("Invalid choice.");
    }
} else {
    if (isUserChoiceHeads) {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else if (isUserChoiceTails) {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("Invalid choice.");
    }
}