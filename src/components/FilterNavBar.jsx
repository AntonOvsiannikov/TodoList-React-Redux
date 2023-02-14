import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../store/selector';
import {changeFilterAction} from '../store/action/filterActions.js';
const FilterNavBar = ({children,hashValue}) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterSelector);
  const changeFilter = (e,filter) => {
    window.location.hash = filter;
    dispatch(changeFilterAction(filter));
  }
  return (
    <li>
      <a href={hashValue} 
        className= {filterValue === hashValue ? 'selected' : ''}
        onClick={(e)=> changeFilter(e,hashValue)}
        >{children}</a>
    </li>
  )
}

export default FilterNavBar