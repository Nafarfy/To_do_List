const taskInput = document.querySelector(".add-task-input");
const addBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");

class ToDoList {
  tasks = [];
}

ToDoList.prototype.renderTasks = function () {
  taskList.innerHTML = this.tasks
    .map((task) => {
      return this.createTask(task);
    })
    .join("");
};

ToDoList.prototype.addTask = function (taskName) {
  const task = {
    id: this.tasks.length + 1,
    taskName,
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  this.tasks = [...this.tasks, task];
  this.renderTasks();

  return task;
};

ToDoList.prototype.deleteTask = function (taskId) {
  this.tasks = this.tasks.filter((task) => task.id !== taskId);
  this.renderTasks();
};

ToDoList.prototype.toggleTaskComplete = function (taskId) {
  return (this.tasks = this.tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        isDone: !task.isDone,
        updatedAt: new Date(),
      };
    }

    return task;
  }));
};

ToDoList.prototype.createTask = function (task) {
  return `
  <li class="list-group-item d-list-item mb-1">${task.taskName}
    <button class="delete-btn float-end"><span>X</span></button>
  </li>
  `;
};

ToDoList.prototype.getTasks = function () {
  return this.tasks;
};

const toDoList = new ToDoList();

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!taskInput.value) {
    return;
  }

  toDoList.addTask(taskInput.value);
  taskInput.value = "";
});
