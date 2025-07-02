const min = 50;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
let guess = document.getElementById("input");
let submit = document.getElementById("submit");
guess = Number(guess.value);

submit.onclick = function() {

 
if (guess < min || guess > max){
    window.alert("Please enter a number between " + min + " and " + max);
    return;
}
else if (guess < answer){
    console.log("Your guess is too low. Try again!");
    window.alert("Your guess is too low. Try again!");  
}
else if (guess > answer){
    console.log("Your guess is too high. Try again!");
    window.alert("Your guess is too high. Try again!");  
}
else {
    console.log("Congratulations! You guessed the number: " + answer);
    window.alert("Congratulations! You guessed the number: " + answer);

}
}