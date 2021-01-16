const taskInput = document.querySelector(".add-task-input");
const taskList = document.querySelector(".task-list");
const addTaskForm = document.querySelector(".add-task-form");

const toDoList =
  typeof ToDoList !== "undefined" ? new ToDoList() : console.log("There is no ToDoList class");

const renderTasks = function () {
  taskList.innerHTML = toDoList
    .getTasks()
    .map((task) => {
      return createTask(task);
    })
    .join("");

  addDeleteBtnEvents();
  addCheckBtnEvents();
};

const createTask = function (task) {
  return `
  <li class="list-group-item d-list-item mb-1" data-id="${task.id}">${task.taskName}
    <input class="check-btn float-start" type="checkbox">
    <button class="delete-btn float-end">X</button>
  </li>
  `;
};

const addCheckBtnEvents = function () {
  const checkBtn = taskList.querySelectorAll(".check-btn");
  checkBtn.forEach((button, i) => {
    checkIfDone(button, i);
    button.addEventListener("click", () => {
      toDoList.toggleTaskComplete(+button.parentElement.dataset.id);
      checkIfDone(button, i);
    });
  });
};

const checkIfDone = function (button, i) {
  if (toDoList.getTasks()[i].isDone) {
    button.setAttribute("checked", "checked");
    button.parentElement.classList.add("checked");
  } else {
    button.removeAttribute("checked", "checked");
    button.parentElement.classList.remove("checked");
  }
};

const addDeleteBtnEvents = function () {
  const deleteBtn = taskList.querySelectorAll(".delete-btn");
  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      toDoList.deleteTask(+button.parentElement.dataset.id);
      renderTasks();
    });
  });
};

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  toDoList.addTask(taskInput.value);
  renderTasks();
  taskInput.value = "";
});
