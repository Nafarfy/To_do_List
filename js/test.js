const tests = [
  () => {
    const toDoList = new ToDoList();
    return toDoList.getTasks().length === 0;
  },
  () => {
    const toDoList = new ToDoList();
    toDoList.addTask('test1');
    return toDoList.getTasks()[0].taskName === 'test1';
  },
  () => {
    const toDoList = new ToDoList();
    toDoList.addTask('test2');
    const t = toDoList.addTask('test2');
    return t.id === 2;
  },
  () => {
    const toDoList = new ToDoList();
    toDoList.addTask('test3');
    const task = toDoList.addTask('test3');
    toDoList.deleteTask(task.id);
    return toDoList.getTasks().length === 1;
  },
  () => {
    const toDoList = new ToDoList();
    toDoList.addTask('test');
    const task = toDoList.addTask('test');
    toDoList.toggleTaskComplete(task.id);
    return toDoList.getTasks()[1].isDone === true;
  }
];

tests.forEach((test, i) => {
  const testResult = test();
  console.log(`tests[${i}] - ${testResult ? 'passed' : 'failed'}`);
});