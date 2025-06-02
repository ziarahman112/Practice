
 let username;
document.getElementById("myText").textContent = username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").getValue;
console.log(username);
document.getElementById("myHeader").textContent = `Hello ${username}`;
}
document.getElementById("myUsername").textContent = `Hello the usernmame is ${username}`;
