export const todoSelector = state => state.todoList;
export const filterSelector = state => state.filter;
export const filteredTodolistSelector = (state) => {
  switch (state.filter) {
    case '#/completed':
      return state.todoList.filter(({checked}) => checked)
    case '#/active':
      return state.todoList.filter(({checked}) => !checked)
    default:
      return state.todoList
  }
}

export const stateSelector = state => state;

