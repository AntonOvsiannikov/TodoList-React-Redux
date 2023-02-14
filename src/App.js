import React from "react";
import TodoList from "./components/TodoList";
import UserInput from "./components/UserInput";
import {isAllTrueTodo} from "./utils/todoListHelperFunction";
import {useDispatch, useSelector} from "react-redux";
import {todoSelector} from "./store/selector/todoListSelector";
import FooterApp from "./components/FooterApp";
import {checkAllTodoAction} from "./store/action/todoListAction";
import './styles/index.css';


function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoSelector);
  const checkAllTodo = (e) => {
    const allTrueTodoState = isAllTrueTodo(todoList);
    dispatch(checkAllTodoAction(allTrueTodoState));
  }
  return (
    <div className="App">
      <section className="todoapp" id="todoapp1">
        <header className="header">
          <h1>todos</h1>
          <UserInput/>
        </header>
        <section className="main">
          <input 
            id="toggle-all"
            checked={isAllTrueTodo(todoList)}
            onClick={checkAllTodo}
            className="toggle-all" 
            type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete</label>
          <TodoList/>
        </section>
        {todoList.length > 0 ? <FooterApp todoList={todoList}/> : null}
      </section>
    </div>
  );
}

export default App
