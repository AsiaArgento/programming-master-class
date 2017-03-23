// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var userAge = prompt("What is your age?");
// var fullName = firstName + " " + lastName;
//
// alert("Hello there, " + fullName);
// alert("You are " + userAge + " years old");

// If age is negative
if(age < 0) {
  console.log("Come back when you're out of the womb");
}

// If age is 21
if(age === 21) {
  console.log("Happy 21st Birthday!");
}

// If age is odd
// (not evenly divisible by two)
if(age % 2 !== 0) {
  console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
