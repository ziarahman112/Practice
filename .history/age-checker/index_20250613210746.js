const submit = document.getElementById('checkAge ');
const input = document.getElementById('ageInput');
const output = document.getElementById('ageOut');
let age; 

submit.onclick = function() {
    age = input.value;
    age = Number(age);
 if (age < 18){
    console.log("You are too young");
    output.textContent = "You are too young";
 }
 else if (age > 18){
    console.log("You are old enough");
    output.textContent = "You are old enough";
 }
 else {
    console.log("You are exactly 18");
    output.textContent = "You are exactly 18";
 }
}