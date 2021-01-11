const clear = function() {
  tasks = [];
};


const tests = [
  () => { return tasks.length === 0 },
  () => {
    ToDoList.addTask('test1');
    return tasks[0].taskName === 'test1';
  },
  () => {
    const t = ToDoList.addTask('test2');
    return t.id === 1;
  },
  () => {
    const task = ToDoList.addTask('test3');
    ToDoList.deleteTask(task.id);
    return tasks.length === 0;
  },
  () => {
    ToDoList.addTask('test');
    const task = ToDoList.addTask('test');
    ToDoList.deleteTask(task.id);
    return tasks.length === 1;
  },
  () => {
    ToDoList.addTask('test');
    const task = ToDoList.addTask('test');
    ToDoList.toggleTaskComplete(task.id);
    return task.isDone === true;
  }
];

tests.forEach((test, i) => {
  clear();
  const testResult = test();
  console.log(`tests[${i}] - ${testResult ? 'passed' : 'failed'}`);
});