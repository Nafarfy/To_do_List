class ToDoList {
  tasks = [];

  idCount = 1;
}

ToDoList.prototype.addTask = function (taskName) {
  const task = {
    id: this.idCount++,
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

ToDoList.prototype.getTasks = function () {
  return this.tasks;
};
