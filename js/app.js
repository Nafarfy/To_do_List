(function () {
  const taskInput = document.querySelector(".add-task-input");
  const addTaskForm = document.querySelector(".add-task-form");
  const taskList = document.querySelector(".task-list");

  if (typeof ToDoList === "undefined") {
    alert("There is no ToDoList class");
    return;
  }

  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    toDoList.addTask(taskInput.value);
    renderTasks();
    taskInput.value = "";
  });

  const toDoList = new ToDoList();

  const renderTasks = function () {
    const listNodes = document.createDocumentFragment();

    toDoList.getTasks().map((task) => {
      listNodes.append(createTaskNode(task));
    });

    taskList.innerHTML = "";
    taskList.append(listNodes);
  };

  const createTaskNode = function (task) {
    const node = getTaskTemplate(task);
    const checkBtn = node.querySelector(".check-btn");
    const deleteBtn = node.querySelector(".delete-btn");

    const deleteListener = () => {
      deleteBtn.removeEventListener("click", deleteListener);
      checkBtn.removeEventListener("click", checkListener);
      toDoList.deleteTask(task.id);
      renderTasks();
    };

    const checkListener = () => {
      toDoList.toggleTaskComplete(task.id);
      renderTasks();
    };

    checkBtn.addEventListener("click", checkListener);
    deleteBtn.addEventListener("click", deleteListener);
    return node;
  };

  const createTaskNode = function (task) {
    const node = getTaskTemplate(task);
    const checkBtn = node.querySelector(".check-btn");
    const deleteBtn = node.querySelector(".delete-btn");
  };
})();
