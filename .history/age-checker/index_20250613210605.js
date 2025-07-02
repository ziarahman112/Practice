const submit = document.getElementById('submit');
const input = document.getElementById('ageInput');
const output = document.getElementById('ageOut');
let age; 

submit.onclick = function() {
    age = submit.value;
    age = Number(age);
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