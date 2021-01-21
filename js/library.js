class ToDoList {
  tasks = [];

  // idCount;
}

ToDoList.prototype.getNewId = function () {
  // return this.tasks.length > 0 ? this.tasks.length + 1 : 1;
  return Math.random();
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
  return task;
};

ToDoList.prototype.deleteTask = function (taskId) {
  this.tasks = this.tasks.filter((task) => task.id !== taskId);
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

ToDoList.prototype.setTasks = function (value) {
  return (this.tasks = value);
};

ToDoList.prototype.getTasks = function () {
  return this.tasks;
};
