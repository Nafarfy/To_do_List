const storage = (() => {
  const saveItem = (key, value, onValueSaved) => {
    localStorage.setItem(key, JSON.stringify(value));
    onValueSaved();
  };

  const deleteItem = (key, onItemDeleted) => {
    localStorage.removeItem(key);
    onItemDeleted();
  };

  const getItems = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  };

  return {
    saveItem,
    getItems,
    deleteItem,
  };
})();
