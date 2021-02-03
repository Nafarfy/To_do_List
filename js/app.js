const app = (() => {
  const app = document.querySelector(".app");
  const taskInput = document.querySelector(".add-task-input");
  const addTaskForm = document.querySelector(".add-task-form");
  const taskList = document.querySelector(".task-list");

  let toDoList;

  const renderTasks = () => {
    const listNodes = document.createDocumentFragment();

    toDoList.getTasks().map((task) => {
      listNodes.append(createTaskNode(task));
    });

    taskList.innerHTML = "";
    taskList.append(listNodes);
  };

  const saveTasks = () => {
    // app.classList.add("app-loading");
    storage.saveItem("tasks", toDoList.getTasks(), () => {
      app.classList.remove("app-loading");
    });
  };

  const createTaskNode = (task) => {
    const node = getTaskTemplate(task);
    const checkBtn = node.querySelector(".check-btn");
    const deleteBtn = node.querySelector(".delete-btn");

    const deleteListener = () => {
      deleteBtn.removeEventListener("click", deleteListener);
      checkBtn.removeEventListener("click", checkListener);
      toDoList.deleteTask(task.id);
    };

    const checkListener = () => {
      toDoList.toggleTaskComplete(task.id);
    };

    checkBtn.addEventListener("click", checkListener);
    deleteBtn.addEventListener("click", deleteListener);
    return node;
  };

  const getTaskTemplate = (task) => {
    return document.createRange().createContextualFragment(`
    <li class="list-group-item d-list-item mb-1 ${task.isDone ? "checked" : ""}">${task.taskName}
    <input class="check-btn float-start" type="checkbox" ${task.isDone ? "checked" : ""}>
    <button class="delete-btn float-end">X</button>
    </li>
    `);
  };

  const init = () => {
    storage.loadItem("tasks", (tasks) => {
      initList(tasks);
      app.classList.remove("app-loading");
    });
  };

  const initList = (tasks) => {
    toDoList = new ToDoList(tasks, () => {
      renderTasks();
      saveTasks();
    });

    renderTasks();

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      toDoList.addTask(taskInput.value);
      taskInput.value = "";
    });
  };

  return {
    init,
  };
})();

app.init();
