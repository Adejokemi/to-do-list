const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const addTaskAtBeginning = document.getElementById("addTaskAtBeginning");
const removeLastTask = document.getElementById("removeLastTask");
const removeFirstTask = document.getElementById("removeFirstTask");

const tasks = [];


function updateTaskList() {
  taskList.innerHTML = ""; 
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}


  
 
addTaskButton.addEventListener("click", function addTask() {
    const newTask = newTaskInput.value;
    if (newTask !== "") {
      tasks.push(newTask);
      newTaskInput.value = "";
      updateTaskList();
    }
  });


addTaskAtBeginning.addEventListener("click",  function addTaskAtBeginning() {
    const newTask = newTaskInput.value;
    if (newTask !== "") {
      tasks.unshift(newTask); 
      newTaskInput.value = "";
      updateTaskList();
    }
  });


removeLastTask.addEventListener("click", function removeLastTask() {
    tasks.pop(); 
    updateTaskList();
  });

removeFirstTask.addEventListener("click", function removeFirstTask() {
    if (tasks.length > 0) {
      tasks.shift(); 
      updateTaskList();
    }
  });




updateTaskList();
