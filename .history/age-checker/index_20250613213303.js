const submit = document.getElementById('checkAge');
const input = document.getElementById('ageInput');
const output = document.getElementById('ageOut');
let age; 

submit.onclick = function() {
    age = input.value;
    age = Number(age);
 output = age > 18 ? "Your are too young" : "You are old enough";
}