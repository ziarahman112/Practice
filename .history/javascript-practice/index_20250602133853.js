const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
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