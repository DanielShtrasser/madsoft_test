import { useState, useEffect, Dispatch,  SetStateAction} from "react";
 
function getStorageValue<T>(key: string, defaultValue: T) {
  const saved: string | null = localStorage.getItem(key);
  let initial: T;
  if(saved) {
    initial = JSON.parse(saved)
    return initial
    }
  return defaultValue;
}
 
export function useLocalStorage<T>(key: string, defaultValue: T): [T,  Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
 
  return [value, setValue];
};
