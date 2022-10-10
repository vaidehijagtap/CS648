var first_number;
var second_number;

first_number = window.prompt("Enter the first number:");
second_number = window.prompt("Enter the second number:");

first_number = parseInt(first_number, 10);
second_number = parseInt(second_number, 10);

if (first_number == second_number) {
    document.write("Both the numbers are equal." + "<br>");
} else if (first_number > second_number) {
    document.write(String(first_number) + " is the larger number." + "<br>");
} else {
    document.write(String(second_number) + " is the larger number." + "<br>");
}