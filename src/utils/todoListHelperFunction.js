import Todo from "./Todo"
export function isAllTrueTodo(todoList) {
  const state = todoList.filter(todo => todo.checked === true).length;
  return state === todoList.length && todoList.length > 0;
}
export const commitTodoList = (todoList) => {
  localStorage.setItem('todoapp',JSON.stringify(todoList));
}
export function initialTodoList() {
  let initTodoList = JSON.parse(localStorage.getItem('todoapp')) || [];
  return initTodoList.map(todoItem => new Todo(todoItem.id,todoItem.text,todoItem.checked));
}