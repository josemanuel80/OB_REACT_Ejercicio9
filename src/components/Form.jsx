import { useContext, useRef } from 'react';
import { DataContext } from '../context/DataContext';

export const LEVELS = {
  HIGH: 'Alta',
  MEDIUM: 'Media',
  LOW: 'Baja',
};

export const Form = () => {
  const titleRef = useRef();
  const taskRef = useRef();
  const selectRef = useRef();
  const filterSelectRef = useRef();

  const { dispatch, setFilter } = useContext(DataContext);

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

  const handleFilterChange = () => {
    setFilter(filterSelectRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" ref={titleRef} />
        <br />
        <label htmlFor="task">Tarea:</label>
        <input type="text" name="task" ref={taskRef} />
        <br />
        <label htmlFor="prioritySelect">Prioridad:</label>
        <select name="prioritySelect" ref={selectRef}>
          <option value={LEVELS.HIGH}>ALTA</option>
          <option value={LEVELS.MEDIUM}>MEDIA</option>
          <option value={LEVELS.LOW}>BAJA</option>
        </select>
        <br />
        <button type="submit">Crear tarea</button>
      </form>
      <select ref={filterSelectRef} onChange={handleFilterChange}>
        <option value="ALL">TODAS</option>
        <option value={LEVELS.HIGH}>ALTA</option>
        <option value={LEVELS.MEDIUM}>MEDIA</option>
        <option value={LEVELS.LOW}>BAJA</option>
      </select>
    </>
  );
};
