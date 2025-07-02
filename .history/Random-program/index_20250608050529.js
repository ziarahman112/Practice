
const button = document.getElementById("button");
const label = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

button.onclick = function() {
 Maths.floor(Math.random() * max - min)+ min;
 label.textContent = randomNum;
}



console.log(rand);
