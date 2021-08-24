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
        <li className="todo-todo__list-item" key={todo.id}>
            <span className="todo-todo__list-item-title">{todo.title}</span>
        <div className="todo-todo__list-item-btns">
            <button onClick={()=>handleComplete(todo)}>{todo.isDone? (<i className="fas fa-check-square"></i>) : (<i className="far fa-check-square"></i>)}</button>
            <button onClick={()=>handleEdit(todo)}><i className="far fa-edit"></i></button>
            <button onClick={()=>handleDelete(todo)}><i className="far fa-trash-alt"></i></button>
        </div>
        </li>
          )}
        </ul>
    )
}
