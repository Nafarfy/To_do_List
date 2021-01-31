class ToDoList {
  tasks = [];

  constructor(initialTasks, taskUpdateCallback, onListCreated) {
    this.tasks = initialTasks || [];
    this.taskUpdateCallback = taskUpdateCallback;
    onListCreated();
  }
}

ToDoList.prototype.getNewId = function () {
  return this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
};

ToDoList.prototype.addTask = function (taskName) {
  const task = {
    id: this.getNewId(),
    taskName,
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  this.tasks = [...this.tasks, task];
  this.taskUpdateCallback();
  return task;
};

ToDoList.prototype.deleteTask = function (taskId) {
  this.tasks = this.tasks.filter((task) => task.id !== taskId);
  this.taskUpdateCallback();
};

ToDoList.prototype.toggleTaskComplete = function (taskId) {
  this.tasks = this.tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        isDone: !task.isDone,
        updatedAt: new Date(),
      };
    }

    return task;
  });
  this.taskUpdateCallback();
};

ToDoList.prototype.setTasks = function (value) {
  this.tasks = value;
};

ToDoList.prototype.getTasks = function () {
  return this.tasks;
};
