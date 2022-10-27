import { useContext } from 'react';
import {Ctx} from '../SettingsContext';
import {StorageValueTypes, UseSettingsContextType} from '../types';

export const useSettingsContext = (keyStorage: string): UseSettingsContextType  => {
  const {values = {}, isContext, setters} = useContext(Ctx);

  const setValue = (valueData: StorageValueTypes) => {
    if(setters && setters[keyStorage]) {
      setters[keyStorage](valueData);
    }
  }

  if(!isContext) {
    throw Error('Used hook "useSettingsContext" without "SettingsContext"');
  }

  return [values[keyStorage], setValue];
}
