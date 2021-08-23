import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ComponentsNavegationFilter({actives, todos, setTodos, setActives, clearCompleted}) {
 
/*function clearCompleted(todos){
 
  todos.map((item)=>{
    if(item.id){
        return {...item, isDone:!item.isDone}
    }
    return item;
})
}*/
    return (
      <div>
        <p>{actives.length} item left</p>
      <NavLink to="/">all</NavLink>
        <NavLink to="/active">active</NavLink>
        <NavLink to="/completed">Completed</NavLink>
        <button>Clear Completed</button>
    </div>
    )
}
//onClick={()=>clearCompleted(todos)}