import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { LEVELS } from './Form';
import { v4 as uuid } from 'uuid';

export const List = () => {
  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    console.log(id);
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  };

  const { state, filter, dispatch } = useContext(DataContext);
  switch (filter) {
    case 'ALL': {
      return state.map((todo) => {
        return (
          <>
            <div key={uuid()}>
              <p>
                <strong>Título:</strong> {todo.title}
              </p>
              <p>
                <strong>Tarea:</strong> {todo.task}
              </p>
              <p>
                <strong>Prioridad:</strong> {todo.priority}
              </p>
            </div>
            <button id={todo.id} onClick={handleDelete}>
              Eliminar
            </button>
          </>
        );
      });
    }
    case LEVELS.LOW: {
      const newState = [...state];
      const filtered = newState.filter((todo) => todo.priority === LEVELS.LOW);
      return filtered.map((todo) => {
        return (
          <div key={uuid()}>
            <p>
              <strong>Título:</strong> {todo.title}
            </p>
            <p>
              <strong>Tarea:</strong> {todo.task}
            </p>
            <p>
              <strong>Prioridad:</strong> {todo.priority}
            </p>
          </div>
        );
      });
    }
    case LEVELS.MEDIUM: {
      const newState = [...state];
      const filtered = newState.filter(
        (todo) => todo.priority === LEVELS.MEDIUM,
      );
      return filtered.map((todo) => {
        return (
          <div key={uuid()}>
            <p>
              <strong>Título:</strong> {todo.title}
            </p>
            <p>
              <strong>Tarea:</strong> {todo.task}
            </p>
            <p>
              <strong>Prioridad:</strong> {todo.priority}
            </p>
          </div>
        );
      });
    }
    case LEVELS.HIGH: {
      const newState = [...state];
      const filtered = newState.filter((todo) => todo.priority === LEVELS.HIGH);
      return filtered.map((todo) => {
        return (
          <div key={uuid()}>
            <p>
              <strong>Título:</strong> {todo.title}
            </p>
            <p>
              <strong>Tarea:</strong> {todo.task}
            </p>
            <p>
              <strong>Prioridad:</strong> {todo.priority}
            </p>
          </div>
        );
      });
    }
    default:
      return state;
  }
};
