const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
let guess = document.getElementById("input");
let submit = document.getElementById("submit");
guess = Number(guess);

let running = true;
let attempts = 0;


submit.onclick = function() {
while (running) {
    guess = Number(guess);
    console.log(guess);
    console.log( answer);  
 if (isNaN(guess) || guess === ""){
    window.alert("Please enter a valid number between " + min + " and " + max);
    console.log("Please enter a valid number between " + min + " and " + max);
    return;
 }
else if (guess < min || guess > max){
    window.alert("Please enter a number between " + min + " and " + max); 
}
else {
        attempts++;
if (guess < answer) {
    window.alert("Too low! Try again.");
    console.log("Too low! Try again.");

}
else if (guess > answer) {
    window.alert("Too high! Try again.");
    console.log("Too high! Try again.");
}
else {
    window.alert("Congratulations! You guessed the number " + answer + " in " + attempts + " attempts.");
    console.log("Congratulations! You guessed the number " + answer + " in " + attempts + " attempts.");
    running = false;
}
}
}
}