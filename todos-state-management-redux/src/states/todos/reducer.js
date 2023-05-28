function todosReducer(todos = [], action = {}) {
  if (action.type === 'ADD_TODO') {
    return [...todos, action.payload];
  }

  if (action.type === 'DELETE_TODO') {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });
  }

  if (action.type === 'RECEIVE_TODOS') {
    return action.payload.todos;
  }

  return todos;
}

export { todosReducer };
