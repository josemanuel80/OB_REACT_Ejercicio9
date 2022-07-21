import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { LEVELS } from './Form';
import { v4 as uuid } from 'uuid';

export const List = () => {
  const { state, filter } = useContext(DataContext);
  switch (filter) {
    case 'ALL': {
      return state.map((todo) => {
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
