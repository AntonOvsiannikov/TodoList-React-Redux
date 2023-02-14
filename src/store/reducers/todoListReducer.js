import {commitTodoList} from "../../utils/todoListHelperFunction";
import Todo from "../../utils/Todo"
import {initialTodoList} from "../../utils/todoListHelperFunction";

const defaultState = initialTodoList();

export const todoListReducer = (state = defaultState,action) => {
  let todoList = state.slice()
  switch(action.type) {
    case"ADD_TODO_ITEM":
      todoList.push(new Todo(false,action.todoText,false));
      commitTodoList(todoList);
      return todoList;
    case"DELETE_TODO_ITEM":
      todoList = todoList.filter(todoItem => action.todoId !== todoItem.id);
      commitTodoList(todoList); 
      return todoList;
    case"EDIT_TODO_ITEM":
      todoList.map(todo => todo.id === action.updateTodo.id ? action.updateTodo : todo);
      commitTodoList(todoList);
      return todoList;
    case"CLEAR_ALL_TODO_ITEM_DONE":
      todoList = todoList.filter(({checked}) => !checked);
      commitTodoList(todoList);
      return todoList;
    case"CHECK_ALL_TODO_ITEM":
      todoList.map(todo => {
      todo.checked = !action.allTrueState;
      return todo;
      });
      commitTodoList(todoList);
      return todoList;
    default:
      return state;
  }
}
