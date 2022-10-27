import {useEffect, useState} from "react";
import { StorageValueTypes } from '../types';

const valueTypes = ['string', 'number', 'boolean'];

function getStorageValue(key: string, defaultValue: StorageValueTypes) {
  const saved = localStorage.getItem(key);
  return saved !== null ? JSON.parse(saved) : defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: StorageValueTypes ) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if(!valueTypes.some(item => typeof value === item)) {
      throw Error('This type of variable is not supported');
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
