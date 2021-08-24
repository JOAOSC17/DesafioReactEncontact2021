import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ComponentsNavegationFilter({actives, todos, setTodos}) {
 
/*function clearCompleted(todos){
  const newTasks = todos.filter(todo => todo.isDone);
  localStorage.setItem("todos", JSON.parse([...todos].map(item=>{
  setTodos({...item, isDone:false})
}))
);
}*/
    return (
      <div className="navegation-filter">
        <span className="navegation-filter__item-left">{actives.length} Item Left</span>
      <div className="navegation-filter__links">
      <NavLink to="/" exact className="navegation-filter__links-item" activeStyle={{ 
  border: '1px solid #f5f5f5',
  backgroundColor: 'rgb(248, 248, 248)'}}>All</NavLink>
        <NavLink to="/active" className="navegation-filter__links-item" activeStyle={{ 
  border: '1px solid #f5f5f5',
  backgroundColor: 'rgb(248, 248, 248)'}}>Active</NavLink>
        <NavLink to="/completed" className="navegation-filter__links-item" activeStyle={{ 
  border: '1px solid #f5f5f5',
  backgroundColor: 'rgb(248, 248, 248)'}}>Completed</NavLink>
      </div>
        <span className="navegation-filter__clear-completed">Clear Completed</span>
    </div>
    )
}