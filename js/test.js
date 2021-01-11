const clear = function() {
  tasks = [];
};

const tests = [
  () => { return tasks.length === 0 },
  () => {
    addTask('test1');
    return tasks[0].taskName === 'test1';
  },
  () => {
    const t = addTask('test2');
    return t.id === 1;
  },
  () => {
    const task = addTask('test3');
    deleteTask(task.id);
    return tasks.length === 0;
  },
  () => {
    const task = addTask('test');
    deleteTask(task.id);
    deleteTask(task.id);
    return tasks.length === 0;
  },
  () => {
    addTask('test');
    const task = addTask('test');
    toggleTaskComplete(task.id);
    return task.isDone === true;
  }
];

tests.forEach((test, i) => {
  clear();
  const testResult = test();
  console.log(`tests[${i + 1}] - ${testResult ? 'passed' : 'failed'}`);
});


