
const button = document.getElementById("buttons");
const label = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

button.onclick = function() {
 randomNum = Math.floor(Math.random() * max) + min;
 label.textContent = randomNum;
 console.log(randomNum);
}

if (randomNum > 5){
    label.textContent = "Well done you got a high number! " + randomNum;
}




