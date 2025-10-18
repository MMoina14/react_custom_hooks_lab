import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  //  Load from localStorage OR use provided initial value
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  // Update localStorage whenever value or key changes
  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value); //  No JSON.stringify here
    }
  }, [key, value]);

  return [value, setValue];
}
