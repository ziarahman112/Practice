

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
    if (allowedChars.length === 0) {
        return "At least one character type must be selected.";
    }
for (let i = 0; i < passwordLength; i++) {
   const randomIndex = Math.floor(Math.random() * allowedChars.length);
   password += allowedChars[randomIndex];
    }


    return password ;
}



const passwordLength = 12;
const includeLower = false;
const includeUpper = false;
const includeNumbers = false;
const includeSymbols = false;;


const password = generatePassword(passwordLength, includeLower, includeUpper, includeNumbers, includeSymbols);

console.log(`the password is: ${password}`);