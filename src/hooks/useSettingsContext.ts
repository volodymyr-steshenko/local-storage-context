import { useContext } from 'react';
import {Ctx} from '../SettingsContext';
import {StorageValueTypes} from '../types';

export const useSettingsContext = (keyStorage: string): [StorageValueTypes, (valueData: StorageValueTypes) => void]  => {
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
