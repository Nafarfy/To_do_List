const taskInput = document.querySelector(".add-task-input");
const addBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");

const toDoList = new ToDoList();

const renderTasks = function () {
  taskList.innerHTML = toDoList.tasks
    .map((task) => {
      return createTask(task);
    })
    .join("");
};

const createTask = function (task) {
  return `
  <li class="list-group-item d-list-item mb-1">${task.taskName}
    <button class="delete-btn float-end"><span>X</span></button>
  </li>
  `;
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!taskInput.value) {
    return;
  }

  toDoList.addTask(taskInput.value);
  renderTasks();
  taskInput.value = "";
});
