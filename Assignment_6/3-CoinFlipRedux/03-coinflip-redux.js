var coinFlip;

// Assigning a random number (0 or 1) to coinFlip in loop
for (let i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());

    // Display the result in console
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else if (coinFlip == 1) {
        window.console.log("Tails");
    }
}