import { createContext, useContext } from 'react';
import * as CONSTANTS from '../constants';

export const ConstantsContext = createContext(CONSTANTS);

export const useConstants = () => {
  const context = useContext(ConstantsContext);
  return context || CONSTANTS;
};
