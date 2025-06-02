
 let username;
document.getElementById("myText").textContent = username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
console.log(username);
document.getElementById("myHeader").textContent = `Hello ${username}`;
}

let age  = window.prompt("Please enter your age");
age = Number(age); 


if(age < 18) {
    document.getElementById("myAge").textContent = `You are ${age} years old.`;
    
    console.log("You are a minor.");
}else {
    document.getElementById("myAge").textContent = `You are ${age} years old.`;
    console.log("You are an adult.");       
console.log(age, typeof age);
}

