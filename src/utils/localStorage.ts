export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, window.btoa(value));
};

export const getLocalStorage = (key: string): string | undefined => {
  const value = localStorage.getItem(key) || "";

  return window.atob(value);
};

export const clearLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
