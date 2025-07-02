const submit = document.getElementById('submit');
const input = document.getElementById('ageInput');
const output = document.getElementByIs('ageOut');
let age = 0; 

submit.onclick = function() {
 if (age < 18){
    output.textContent = "You are too young";
 }
 else if (age > 18){
    output.textContent = "You are old enough";
 }
 else {
    output.textContent = "You are exactly 18";
 }
}