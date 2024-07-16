import { useState, useEffect } from "react";
export function useLocalStorageState(initiaState, key) {
  const [value, setValue] = useState(function () {
    const storedVlaue = localStorage.getItem(key);
    return storedVlaue ? JSON.parse(storedVlaue) : initiaState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
