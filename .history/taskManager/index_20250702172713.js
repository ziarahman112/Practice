const task = document.getElementById("task");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const time = document.getElementById("time");
const setTime = document.getElementById("setTime");
const paragraph = document.getElementById("paragraph");
paragraph.textContent = "This is a simple task manager. You can add tasks and set a time for them.";
let t = "task has been added";

addTask.onclick = function() {
    Hello();
    setTimeout(2000);
    paragraph .textContent = t;
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