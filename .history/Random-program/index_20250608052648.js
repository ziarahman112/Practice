
const button = document.getElementById("buttons");
const label = document.getElementById("myLabel");
let warning = document.getElementById("warning");
const min = 1;
const max = 6;
let randomNum;

button.onclick = function() {
 randomNum = Math.floor(Math.random() * max) + min;
 label.textContent = randomNum;
 console.log(randomNum);
}

if (randomNum > 2){
    warning.textContent = "Well done you got a high number! ";
}




