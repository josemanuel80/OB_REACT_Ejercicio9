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
    titleRef.current.value = '';
    taskRef.current.value = '';
  };

  const handleFilterChange = () => {
    setFilter(filterSelectRef.current.value);
  };

  return (
    <>
      <div className="title">
        <h2>SUS TAREAS</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="labels" htmlFor="title">
            Título
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            ref={titleRef}
          />
          <br />
          <label className="labels" htmlFor="task">
            Tarea
          </label>
          <input
            className="form-control"
            type="text"
            name="task"
            ref={taskRef}
          />
          <br />
          <label className="labels" htmlFor="prioritySelect">
            Prioridad
          </label>
          <select className="form-select" name="prioritySelect" ref={selectRef}>
            <option value={LEVELS.HIGH}>ALTA</option>
            <option value={LEVELS.MEDIUM}>MEDIA</option>
            <option value={LEVELS.LOW}>BAJA</option>
          </select>
          <br />
          <button className="btn btn-primary" type="submit">
            Crear tarea
          </button>
        </form>
        <div>
          <label className="labels" htmlFor="filterSelect">
            Filtrar por prioridad{' '}
          </label>
          <select
            className="form-select"
            name="filterSelect"
            ref={filterSelectRef}
            onChange={handleFilterChange}
          >
            <option value="ALL">TODAS</option>
            <option value={LEVELS.HIGH}>ALTA</option>
            <option value={LEVELS.MEDIUM}>MEDIA</option>
            <option value={LEVELS.LOW}>BAJA</option>
          </select>
        </div>
      </div>
    </>
  );
};
