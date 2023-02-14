import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {deleteTodoAction,editTodoAction} from "../store/action/todoListAction"
const TodoItem = ({todo}) => {
  const [editInputState,setEditInputState] = useState(false);
  const [editInputValue,setEditInputValue] = useState(todo.text);

  const dispatch = useDispatch();
  const createInputField =(e) => {
    setEditInputState(true);
  }
  const deleteTodoItem = (e) => {
    e.preventDefault();
    dispatch(deleteTodoAction(todo.id));
  }
  const toggleTodoItem = (e) => {
    todo.toggle(!todo.checked);
    dispatch(editTodoAction(todo));
  }
  const editTodoItem = (e) => {
    if(e.type === 'blur' || e.key === 'Enter') {
      helperEditFunction(e);
    }
  }
  const helperEditFunction = (e) => {
    if(editInputValue) {
      e.preventDefault();
      updateTextTodoItem(editInputValue)
      setEditInputState(false);
    } else {
      dispatch(deleteTodoAction(todo.id));
    }
  }
  const updateTextTodoItem = (inputTextTodo) => {
    todo.newText(inputTextTodo);
    dispatch(editTodoAction(todo));
  }
  return (
    <li data-id={todo.id} className={`${todo.checked ? 'completed' : ''} ${editInputState ? 'editing' : ''}`}>
      <div className='view'>
        <input 
          className='toggle' 
          type='checkbox'
          checked={todo.checked}
          onChange={toggleTodoItem}
          />
        <label onDoubleClick={createInputField}>{todo.text}</label>
        <button
          className='destroy'
          onClick={deleteTodoItem}
        ></button>
      </div>
      {editInputState ? 
        <input 
          value={editInputValue} 
          onChange = { e => setEditInputValue(e.target.value)}
          onBlur = {editTodoItem}
          onKeyDown = {editTodoItem}
          className='edit' 
          autoFocus
        /> : null}
    </li>
  )
}
export default TodoItem