const input = document.getElementById("input");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if (fahrenheit.checked){

    }
    else if (celsius.checked){

    }
    else {
        result.textContent = 'Please select a conversion type.';
    }
}