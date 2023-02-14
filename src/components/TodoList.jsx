import React, {useEffect} from 'react';
import TodoItem from './TodoItem';
import {useSelector} from "react-redux";
import {filteredTodolistSelector, filterSelector} from "../store/selector"
const TodoList = () => {
  let todoList = useSelector(filteredTodolistSelector);
  const filter = useSelector(filterSelector);

  useEffect(() => {
    window.location.hash = filter;
  },[])
  return (
    <ul className='todo-list'>
    {todoList.map((todoItem) => 
      <TodoItem todo = {todoItem} key = {todoItem.id}/>)}
    </ul>
  )
}

export default TodoList