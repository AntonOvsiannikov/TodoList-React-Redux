export const addTodoAction = (todoText) => {
  return {
    type:"ADD_TODO_ITEM",
    todoText
  }
}
export const deleteTodoAction = (todoId) => {
  return {
    type:"DELETE_TODO_ITEM",
    todoId
  }
}
export const editTodoAction = (updateTodo) => {
  return {
    type:"EDIT_TODO_ITEM",
    updateTodo
  }
}
export const clearAllTodoDoneAction = () => {
  return {
    type:"CLEAR_ALL_TODO_ITEM_DONE"
  }
}
export const checkAllTodoAction = (allTrueState) => {
  return {
    type:"CHECK_ALL_TODO_ITEM",
    allTrueState
  }
}