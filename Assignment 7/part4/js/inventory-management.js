/*eslint-env browser*/

function view(inventory) {
    "use strict";
    var i, stored;
    // LOOP THROUGH THE INVENTORY ARRAY
    for (i = 0; i < inventory.length; i += 1) {
        // RETRIEVE THE STORED QUANTITIES FROM STORAGE (ASSUMING IT EXISTS)
        stored = localStorage.getItem(inventory[i].sku);
        // CHECK AND MAKE SURE THAT WE ACTUALLY GOT SOMETHING BACK FROM STORAGE
        if (stored !== null) {
            // IF WE DID UPDATE THE QUANTITIES TO MATCH WHAT'S IN STORAGE
            inventory[i].quantity = stored;
        }
        // DISPLAY THE INVENTORY TO THE USER
        window.console.log(inventory[i].sku + "\t" + inventory[i].product + "\t" + "(" + inventory[i].quantity + ")" + "\t$" + inventory[i].cost);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var i, newQuantity, skuToUpdate;
    // ASK THE USER WHAT SKU THEY WANT TO UPDATE
    skuToUpdate = parseInt(window.prompt("Enter the sku to update"), 10);
    // MAKE SURE THEY ACTUALLY ENTER A SKU AND THAT IT'S A VALID NUMBER
    if (skuToUpdate === null || isNaN(skuToUpdate)) {
        // IF THEY DON'T, DISPLAY ERROR AND EXIT FUNCTION
        window.alert("The entered sku is not valid");
        return false;
    } else {
        // IF IT PASSES THAT CHECK, LOOP THROUGH INVENTORY
        for (i = 0; i < inventory.length; i += 1) {
            // AND SEE IF THERE'S A MATCHING SKU
            if (inventory[i].sku === skuToUpdate) {
                // IF THERE IS, ASK THE USER FOR THE NEW QUANTITY
                newQuantity = parseInt(window.prompt("Enter the new quantity"), 10);
                // MAKE SURE THEY ACTUALLY ENTER A QUANTITY AND THAT IT'S A VALID NUMBER
                if (newQuantity === null || isNaN(newQuantity)) {
                    // IF IT'S NOT, DISPLAYT AN ERROR TO THE USER
                    window.alert("The quantity you entered is not valid");
                } else {
                    // IF IT IS, UPDATE WEB STORAGE
                    localStorage.setItem(inventory[i].sku, newQuantity);
                    // UPDATE INVENTORY
                    inventory[i].quantity = newQuantity;
                    // DISPLAY THE UPDATE TO THE USER
                    window.console.log("The quantity of \"" + inventory[i].product + "\" was updated to " + newQuantity + " unit(s)");
                    // ADD A SPACE
                    window.console.log("");
                    // DISPLAY THE UPDATE INVENTORY
                    view(inventory);
                    return true;
                }
            } else { // IF THERE ISN'T, DISPLAY ERROR AND EXIT FUNCTION
                window.alert("The sku you entered is not present in inventory");
                return false;
            }
        }
    }
}

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update inventory");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function getInventory() {
    "use strict";
    // BUILD OUT THE INVENTORY OF ITEMS
    var tshirt = [], jeans = [], jacket = [], hat = [], socks = [], inventory;

    tshirt.sku = 101;
    tshirt.product = "TShirt";
    tshirt.quantity = 17;
    tshirt.cost = 24.99;

    jeans.sku = 102;
    jeans.product = "Jeans";
    jeans.quantity = 33;
    jeans.cost = 49.99;

    jacket.sku = 103;
    jacket.product = "Jacket";
    jacket.quantity = 23;
    jacket.cost = 39.99;

    hat.sku = 104;
    hat.product = "Belt";
    hat.quantity = 15;
    hat.cost = 19.99;

    socks.sku = 105;
    socks.product = "Socks";
    socks.quantity = 13;
    socks.cost = 9.99;
    
    // MULTI-DIMENSIONAL ARRAY TO STORE INVENTORY
    inventory = [tshirt, jeans, jacket, hat, socks];
    
    return inventory;
}

window.addEventListener("load", function () {
    "use strict";
    var inventory, command;
    // DISPLAY THE COMMAND MENU
    displayMenu();
    // INITIALIZE THE ARRAYS 
    inventory = getInventory();
    // RESPOND TO USER COMMANDS        
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("This is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated");
});