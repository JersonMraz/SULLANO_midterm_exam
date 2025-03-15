//Initialize the array called task
let tasks = [];

//This is use to add task
function addTask(name, description) {
  const task = {
    id: tasks.length + 1,
    name,
    description,
  };
  tasks.push(task);
}

//This function is to view all tasks
function viewTasks() {
  return tasks;
}

//This is to ipdate a task
function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
  }
}

//Function to delete a task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}