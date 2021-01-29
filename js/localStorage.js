const localStorageModule = (() => {
  const saveItem = (key, value) => {
    return localStorage.setItem(key, value);
  };

  const deleteItem = (key) => {
    localStorage.removeItem(key);
  };

  const initialItems = (key) => {
    return localStorage.getItem(key) ? getLocalStorage(key) : [];
  };

  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return {
    initialItems,
    saveItem,
    getLocalStorage,
    deleteItem,
  };
})();
