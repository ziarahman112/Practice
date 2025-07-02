const task = document.getElementById("task");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const time = document.getElementById("time");
const setTime = document.getElementById("setTime");
const parapgraph = document.getElementById("parapgraph");

addTask.onclick = function() {
    Hello();
    setTimeout()
};

setTime.onclick = function() {
    const li = document.createElement("li");
    li.textContent = "Time set for: " + time.value;
    taskList.appendChild(li);
};


function Hello() {
    if (task.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    else{
    const li = document.createElement("li");
    li.textContent = task.value;
    taskList.appendChild(li);
    task.value = "";
    }
    task.focus();
};