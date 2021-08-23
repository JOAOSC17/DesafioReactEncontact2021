import React, { useEffect } from 'react'

export default function PageCompleted({todos, setTodos, setEditTodo, completeds, setCompleteds}) {
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
        {completeds.map(completed=>
            <li className="todo-todo__list-item" key={completed.title}>{completed.title}   <div>
            <button onClick={()=>handleComplete(completed)}>{completed.isDone? 'checked' : 'check'}</button>
            <button onClick={()=>handleEdit(completed)}>Edit</button>
            <button onClick={()=>handleDelete(completed)}>Trash</button>
        </div>
        </li>
        )}
        </ul>
    )
}
//todos={todos} setTodos={setTodos} 