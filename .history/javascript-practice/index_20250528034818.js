
 let username;
document.getElementById("myText").textContent = username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
console.log(username);
document.getElementById("myHeader").textContent = `Hello ${username}`;
}

let name  = window.prompt("Please enter your name");

