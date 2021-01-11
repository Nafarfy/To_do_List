const ToDoList = (function() {

  // Private
  let tasks = [];

  const _findTaskIndex = function(taskId) {
    return tasks.findIndex((task) => task.id === taskId);
  };

  const _findTask = function(taskId) {
    return tasks[_findTaskIndex(taskId)];
  };

  // Public
  return {

    addTask: function(taskName) {
      const task = {
        id: tasks.length + 1,
        taskName,
        isDone: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      tasks.push(task);
      return task;
    },

    deleteTask: function(taskId) {
      const taskIndex = _findTaskIndex(taskId);

      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return true;
      }

      return false;
    },

    toggleTaskComplete: function(taskId) {
      const task = _findTask(taskId);

      task.isDone = !task.isDone;
      task.updatedAt = new Date();
    },
  };
})();
