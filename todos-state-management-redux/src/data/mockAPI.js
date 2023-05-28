const mockAPI = (() => {
  let todos = getTodosFromStorage() || [
    {
      id: 'todo-1664268511621',
      text: 'Mencuci sepeda motor',
      complete: false
    },
    {
      id: 'todo-1664268553422',
      text: 'Menjemput adik sekolah',
      complete: false
    }
  ];

  let goals = getGoalsFromStorage() || [
    {
      id: 'goal-1664268511621',
      text: 'Belajar React'
    },
    {
      id: 'goal-1664268511622',
      text: 'Belajar Redux'
    }
  ];

  function saveTodosToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function saveGoalsToStorage() {
    localStorage.setItem('goals', JSON.stringify(goals));
  }

  function getTodosFromStorage() {
    const todos = localStorage.getItem('todos');

    if (!todos) {
      return null;
    }

    return JSON.parse(todos);
  }

  function getGoalsFromStorage() {
    const goals = localStorage.getItem('goals');

    if (!goals) {
      return null;
    }

    return JSON.parse(goals);
  }

  function mockRequest(action) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(action());
      }, 1000);
    });
  }

  function addTodo(text) {
    return mockRequest(() => {
      const newTodo = {
        id: `todo-${+new Date()}`,
        text,
        complete: false
      };

      todos = [...todos, newTodo];

      saveTodosToStorage();

      return newTodo;
    });
  }

  function getTodos() {
    return mockRequest(() => {
      return JSON.parse(JSON.stringify(todos));
    });
  }

  function deleteTodo(id) {
    return mockRequest(() => {
      const todoToBeDeleted = todos.find((todo) => todo.id === id);

      if (todoToBeDeleted.complete) {
        todos = todos.filter((todo) => todo.id !== id);
        saveTodosToStorage();
      }
    });
  }

  function toggleTodo(id) {
    return mockRequest(() => {
      todos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }

        return todo;
      });

      saveTodosToStorage();
    });
  }

  function addGoal(text) {
    return mockRequest(() => {
      const newGoal = {
        id: `goal-${+new Date()}`,
        text
      };

      goals = [...goals, newGoal];

      saveGoalsToStorage();

      return newGoal;
    });
  }

  function getGoals() {
    return mockRequest(() => {
      return JSON.parse(JSON.stringify(goals));
    });
  }

  function deleteGoal(id) {
    return mockRequest(() => {
      goals = goals.filter((goal) => goal.id === id);
      saveGoalsToStorage();
    });
  }

  return {
    addTodo,
    getTodos,
    deleteTodo,
    toggleTodo,
    addGoal,
    getGoals,
    deleteGoal
  };
})();

export default mockAPI;
