const app = (() => {
  const taskInput = document.querySelector(".add-task-input");
  const addTaskForm = document.querySelector(".add-task-form");
  const taskList = document.querySelector(".task-list");

  let toDoList;

  storage.loadItem("tasks", (loadedItem) => {
    alert("Loading tasks");
    toDoList = new ToDoList(loadedItem, () => {
      renderTasks();
      updateLocalStorage();
    });
  });

  const renderTasks = () => {
    const listNodes = document.createDocumentFragment();

    toDoList.getTasks().map((task) => {
      listNodes.append(createTaskNode(task));
    });

    taskList.innerHTML = "";
    taskList.append(listNodes);
  };

  const updateLocalStorage = () => {
    console.log("Saving tasks...");
    storage.saveItem("tasks", toDoList.getTasks(), () => {
      setTimeout(() => {
        console.log("Task has been saved");
      }, 1000);
    });
  };

  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    toDoList.addTask(taskInput.value);
    taskInput.value = "";
  });

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
    if (typeof ToDoList === "undefined") {
      alert("There is no ToDoList class");
      return;
    }

    renderTasks();
  };

  return {
    init,
  };
})();

app.init();
