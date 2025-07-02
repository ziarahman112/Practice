const task = document.getElementById("task");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const time = document.getElementById("time");
const setTime = document.getElementById("setTime");

addTask.onclick = function() {
    taskList.textContent += task.value + "\n";
    task.value = ""; // Clear the input field after adding the task

}

setTime.onclick = function() {
   taskList.textContent += "Time set for: " + time.value + "\n";
}

