export default {
  load(value) {
    try {
      const serializedState = localStorage.getItem(value);

      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (err) {
      console.error("Get state error: ", err);
    }
  },

  // Принимает ключ `key` и значение `value`.
  save(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error("Set state error: ", err);
    }
  },
};
