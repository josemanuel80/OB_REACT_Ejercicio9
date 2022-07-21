import { createContext, useReducer, useState } from 'react';
import { initialState, todoReducer } from '../reducer/todoReducer';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [filter, setFilter] = useState('ALL');
  return (
    <DataContext.Provider value={{ state, dispatch, filter, setFilter }}>
      {children}
    </DataContext.Provider>
  );
};
