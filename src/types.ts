export type StorageValueTypes = string | number | boolean;
export type StorageType = Record<string, StorageValueTypes>;
export type SettersType = Record<string, (value: StorageValueTypes) => void>;
export type UseSettingsContextType = number;

export interface CreateContextInterface {
  values?: StorageType;
  isContext?: boolean;
  setters?: SettersType;
}

export interface SettingsContextProps {
  value: StorageType;
  children: JSX.Element | Array<JSX.Element>;
}


