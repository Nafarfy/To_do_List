const storage = (() => {
  const saveItem = (key, value, onValueSaved) => {
    localStorage.setItem(key, JSON.stringify(value));
    setTimeout(onValueSaved, 1000);
  };

  const deleteItem = (key, onItemDeleted) => {
    localStorage.removeItem(key);
    setTimeout(onItemDeleted, 1000);
  };

  const loadItem = (key, onItemLoaded) => {
    const storageItem = localStorage.getItem(key);
    const loadedItem = storageItem
      ? JSON.parse(storageItem)
      : console.log(`no ${key} in local storage`);

    setTimeout(() => {
      onItemLoaded(loadedItem);
    }, 1000);
  };

  return {
    saveItem,
    loadItem,
    deleteItem,
  };
})();
