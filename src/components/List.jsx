import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const List = () => {
  const { state, filter } = useContext(DataContext);
  switch (filter) {
    case 'ALL': {
      return state.map((todo) => {
        return (
          <>
            <p>
              <strong>Título:</strong> {todo.title}
            </p>
            <p>
              <strong>Tarea:</strong> {todo.task}
            </p>
            <p>
              <strong>Prioridad:</strong> {todo.priority}
            </p>
          </>
        );
      });
    }
    default:
      return state;
  }
};
