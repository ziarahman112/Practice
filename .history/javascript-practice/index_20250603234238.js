const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let warning = document.getElementById("warning");
let username = document.getElementById("button");
let count = 0;

username.onclick = function() {
    username.textContent = "Hello, " + username.value + "!";
    console.log("Username set to: " + username.value);
}


increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    warning.textContent = ""; // Clear warning message
    if (count > 10){
        count++;
        countLabel.textContent = count;
       warning.textContent = "Count is more than 10";
       console.log("Warning: Count exceeded 10");
    }
    console.log("Count increased to: " + count);    
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    console.log("Count decreased to: " + count);    
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}