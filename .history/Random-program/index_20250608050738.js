
const button = document.getElementById("button");
const label = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

button.onclick = function() {
 randomNum = Maths.floor(Math.random() * max) + min;
 label.textContent = randomNum;
}
console.log(randomNum);


console.log(rand);
