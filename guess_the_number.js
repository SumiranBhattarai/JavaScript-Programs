const prompt = require("prompt-sync")();
const number = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let total_tries = 0;
console.log("A random number is generated between 0 and 100" + number);
console.log(
  "\nScore\nImpossibly Lucky: 1 Guess\nLucky: 2 Guess\nExcellent: 3 Guess\nNot Bad: 4 Guess\nToday is not your day: 5+  Guess\n"
);
while (1) {
  guess = prompt("Guess the number: ");
  if (guess < number) {
    console.log("guess higher");
  } else if (guess > number) {
    console.log("guess lower");
  } else {
    switch (total_tries) {
      case 1:
        console.log("\nImpossibly Lucky");
        break;
      case 2:
        console.log("\nLucky");
        break;
      case 3:
        console.log("\nExcellent");
        break;
      case 4:
        console.log("\nNot Bad");
        break;
      default:
        console.log("\nToday is not your day");
    }
    console.log(
      "\nYou have guessed the correct number in " + total_tries + " guesses.\n"
    );
    break;
  }
  total_tries++;
}
