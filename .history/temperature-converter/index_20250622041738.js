const input = document.getElementById("input");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if (fahrenheit.checked){
        temp = Number(input.value);

        temp = temp * 9 / 5 + 32;
   result.textContent = "the result is " + temp + "°F";


    }
    else if (celsius.checked){
        temp = Number(input.value);

        temp = (temp - 32) * (5 / 9);
        result.textContent = "the result is " + temp + "°C";

    }
    else {
        result.textContent = 'Please select a conversion type.';
    }
}