const submit = document.getElementById('checkAge');
const input = document.getElementById('ageInput');
const output = document.getElementById('ageOut');
let age; 

submit.onclick = function() {
    age = input.value;
    age = Number(age);
    switch(age){
        case age < 18:
        output.textContent = "You are too young";
        break;
        case age > 18:
        output.textContent = "You are old enough";
        break;
        case age === 18:
        output.textContent = "You are exactly 18";
        break;
        default:
        output.textContent = "Invalid input";
        break;
    }

}