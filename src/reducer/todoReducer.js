export const initialState = [];

export const todoReducer = (state, action) => {
  let newId = 0;
  switch (action.type) {
    case 'CREATE_TODO': {
      return {
        title: action.payload.title,
        task: action.payload.task,
        id: newId++,
        priority: action.payload.priority,
      };
    }
    default:
      return state;
  }
};
