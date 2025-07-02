const submit = document.getElementById('submit');
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