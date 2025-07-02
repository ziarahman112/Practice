const task = document.getElementById("task");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.onclick = function() {
    taskList.textContent += task.value + "\n";
    task.value = ""; // Clear the input field after adding the task

}