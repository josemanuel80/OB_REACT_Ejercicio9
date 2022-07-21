export const initialState = [];

let newId = 0;
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TODO': {
      return [
        ...state,
        {
          title: action.payload.title,
          task: action.payload.task,
          id: newId++,
          priority: action.payload.priority,
        },
      ];
    }
    case 'DELETE_TASK': {
      const newState = [...state];
      const filtered = newState.filter(
        (todo) => todo.id !== parseInt(action.payload.id),
      );
      return filtered;
    }
    default:
      return state;
  }
};
