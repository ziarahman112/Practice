const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
let guess = document.getElementById("input");
let submit = document.getElementById("submit");


submit.onclick = function() {
    guess = Number(guess.value);
    console.log(guess);
    console.log( answer);  
 
if (guess < min || guess > max){
    window.alert("Please enter a number between " + min + " and " + max);
  
}
if (guess < answer){
    console.log("Your guess is too low. Try again!");
    window.alert("Your guess is too low. Try again!");  
}
else if (guess > answer){
    console.log("Your guess is too high. Try again!");
    window.alert("Your guess is too high. Try again!");  
}
else if (guess === answer){
    console.log("Congratulations! You guessed the number you did: " + guess + " and the answer was: " + answer);
    window.alert("Congratulations! You guessed the number: " + answer);

}
else {
    console.log("Something went wrong, please try again.");
    window.alert("Something went wrong, please try again.");}
}