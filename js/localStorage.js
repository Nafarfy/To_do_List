LocalStorage = (() => {
  const initialTasks = () => {
    return JSON.parse(localStorage.tasks);
  };

  return {
    initialTasks,
  };
})();
