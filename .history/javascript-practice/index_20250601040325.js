const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('valueDisplay');
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}