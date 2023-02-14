import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import {addTodoAction} from "../store/action/todoListAction";

const UserInput = (props) => {

  const [inputValue,setInputValue] = useState('');
  const dispatch = useDispatch();
  const addTodoItem = (e) => {
    if(inputValue.length !== 0 && (e.type  === 'blur' || e.key === 'Enter')) {
      e.preventDefault();
      dispatch(addTodoAction(inputValue));
      setInputValue('');
    }
  }
  return (
    <input
    onBlur={addTodoItem}
    onKeyDown={addTodoItem}
    onChange={e=> setInputValue(e.target.value)}
    value={inputValue}
    className='new-todo'
    placeholder='What needs to be done?'
    autoFocus
    {...props}/>
  )
}

export default UserInput