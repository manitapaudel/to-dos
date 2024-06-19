export const getLocalStorage = (key, initialValue) => {
  if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem(key));
    if (storedValue === null) {
      return initialValue;
    } else return value;
  } else {
    return initialValue;
  }
};

export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
