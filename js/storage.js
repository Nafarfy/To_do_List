const storage = (() => {
  const saveItem = (key, value, onValueSaved) => {
    localStorage.setItem(key, JSON.stringify(value));
    onValueSaved();
  };

  const deleteItem = (key, onItemDeleted) => {
    localStorage.removeItem(key);
    onItemDeleted();
  };

  const loadItem = (key, onItemLoaded) => {
    const storageItem = localStorage.getItem(key);
    const loadedItem = storageItem
      ? JSON.parse(storageItem)
      : console.log(`no ${key} in local storage`);
    onItemLoaded();
    return loadedItem;
  };

  return {
    saveItem,
    loadItem,
    deleteItem,
  };
})();
