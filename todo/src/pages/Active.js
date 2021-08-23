import React, { useEffect } from 'react'

export default function PageActive({todos, setTodos, setEditTodo, actives, setActives}) {
  const handleComplete =(todo)=>{
    setTodos(
        todos.map((item)=>{
        if(item.id === todo.id){
            return {...item, isDone:!item.isDone}
        }
        return item;
    }));
}
const handleEdit =({id})=>{
    const findTodo = todos.find((todo)=>todo.id===id);
    setEditTodo(findTodo);
}
const handleDelete =({id})=>{
    setTodos(todos.filter((todo)=> todo.id !== id));
}
return (
    <ul className="todo-todo__list">
    {actives.map(active=>
        
    
    <li className="todo-todo__list-item" key={active.title}>{active.title}   <div>
    <button onClick={()=>handleComplete(active)}>{active.isDone? 'checked' : 'check'}</button>
    <button onClick={()=>handleEdit(active)}>Edit</button>
    <button onClick={()=>handleDelete(active)}>Trash</button>
</div>
</li>
    )}
    </ul>
)
}
//todos={todos} setTodos={setTodos}
//  <ComponentsTodosList key={active.id} active={active}  setEditTodo={setEditTodo}/>