let tasks = [];

// Add Task
const addTask = function(taskName) {
  const task = {
    id: tasks.length + 1,
    taskName,
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.push(task);
  return task;
};


// Find Task Index
const findTaskIndex = function(taskId) {
  return tasks.findIndex((task) => task.id === taskId);
};

// Find Task
const findTask = function(taskId) {
  return tasks[findTaskIndex(taskId)];
};


// Delete Task
const deleteTask = function(taskId) {
  const taskIndex = findTaskIndex(taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }

  return false;
};


// Complete task
const toggleTaskComplete = function(taskId) {
  const task = findTask(taskId);

  task.isDone = !task.isDone;
  task.updatedAt = new Date();
};








