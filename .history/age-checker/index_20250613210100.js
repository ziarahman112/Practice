const submit = document.getElementById('submit');
const input = document.getElementById('ageInput');
let output = document.getElementByIs('ageOut');
let age; 

submit.onclick = function() {
 if (age < 18){
    output.textContent = "You are too young";
 }
 else if (age > 18){
    output.textContent = "You are old enough";
 }
}