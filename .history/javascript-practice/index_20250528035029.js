
 let username;
document.getElementById("myText").textContent = username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
console.log(username);
document.getElementById("myHeader").textContent = `Hello ${username}`;
}

let age  = window.prompt("Please enter your age");
if(age < 18) {
    console.log("You are a minor.");
}else {
    console.log("You are an adult.");       
console.log(age, typeof age);
document.getElementById("myAge").textContent = `You are ${age} years old.`;
}
