import { createContext } from 'react';
import {useLocalStorage} from "./hooks/useLocalStorage";
import {StorageType, CreateContextInterface, SettingsContextProps, SettersType} from './types';

export const Ctx =  createContext<CreateContextInterface>({});

export const SettingsContext = ({value, children}: SettingsContextProps) => {
  const values: StorageType = {};
  const setters: SettersType = {};

  for(let key in value) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [storageValue, setStorageValue] = useLocalStorage(key, value[key]);
    values[key] = storageValue;
    setters[key] = setStorageValue;
  }

  return (
      <Ctx.Provider value={{values, isContext: true, setters}}>
        {children}
      </Ctx.Provider>


  )
}
