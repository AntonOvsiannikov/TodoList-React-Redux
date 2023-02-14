import React from 'react';
import TodoFilter from './TodoFilters';
import { useDispatch } from 'react-redux';
import {clearAllTodoDoneAction} from '../store/action/todoListAction'

const FooterApp = ({todoList}) => {
  const dispatch = useDispatch();
  function todoNotDoneCount() {
    let count = todoList.filter(({checked}) => !checked).length;
    return count;
  }
  function todoDoneCount() {
    let count = todoList.filter(({checked}) => checked).length;
    return count > 0;
  }
  const deleteAllDone = (e) => {
    e.preventDefault();
    dispatch(clearAllTodoDoneAction());
  }
  return(
    <footer className='footer'>
      <span className='todo-count' >{todoNotDoneCount()} items left</span>
      <TodoFilter />
      <button className="clear-completed" onClick={deleteAllDone} style={{display:(todoDoneCount()) ? 'block' : 'none'}} >Clear completed</button>
    </footer>
    )
}

export default FooterApp