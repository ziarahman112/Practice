

function generatePassword(passwordLength,includeLower,includeUpper, includeNumbers, includeSymbols ){
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    let allowedChars = "";
  
    allowedChars += includeLower ? lower : '';
    allowedChars += includeUpper ? upper : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

    if (passwordLength <= 0) {
     return "Password length must be greater than 0.";

    }



    return '';
}



const passwordLength = 0;
const includeLower = false;
const includeUpper = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, includeLower, includeUpper, includeNumbers, includeSymbols);

console.log(`the password is: ${password}`);