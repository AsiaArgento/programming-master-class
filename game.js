// create secretNumber
var secretNumber = 4;


//ask user for guess, convert string to number
//var guess = Number(prompt("Guess a number"));
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


// check if guess is right
if(guess === secretNumber) {
  alert("You Got It Right!");
}

// check if guess is higher
else if(guess > secretNumber) {
  alert("Too high. Guess again.");
}

// otherwise check if lower
else {
  alert("Too low. Guess again.");
}
