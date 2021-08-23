import React from 'react'

export default function PageAll({todos, setTodos, setEditTodo}) {
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
        {todos.map((todo) =>
        <li className="todo-todo__list-item" key={todo.id}>{todo.title}
        <div>
            <button onClick={()=>handleComplete(todo)}>{todo.isDone? 'checked' : 'check'}</button>
            <button onClick={()=>handleEdit(todo)}>Edit</button>
            <button onClick={()=>handleDelete(todo)}>Trash</button>
        </div>
        </li>
          )}
        </ul>
    )
}
