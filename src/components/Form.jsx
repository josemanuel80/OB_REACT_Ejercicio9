import { useContext, useRef } from 'react';
import { DataContext } from '../context/DataContext';

const LEVELS = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
};

export const Form = () => {
  const titleRef = useRef();
  const taskRef = useRef();
  const selectRef = useRef();

  const { state, dispatch } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE_TODO',
      payload: {
        title: titleRef.current.value,
        task: taskRef.current.value,
        priority: selectRef.current.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={titleRef} />
      <input type="text" ref={taskRef} />
      <button type="submit">Crear tarea</button>
      <select ref={selectRef}>
        <option value={LEVELS.HIGH}>ALTA</option>
        <option value={LEVELS.MEDIUM}>MEDIA</option>
        <option value={LEVELS.LOW}>BAJA</option>
      </select>
    </form>
  );
};
