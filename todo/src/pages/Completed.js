import React from 'react'

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
            <li className="todo-todo__list-item" key={completed.title}>
                <span className="todo-todo__list-item-title line-through">{completed.title}</span>
            <div className="todo-todo__list-item-btns">
            <button onClick={()=>handleComplete(completed)}>{completed.isDone? (<i className="fas fa-check-square"></i>) : (<i className="far fa-check-square"></i>)}</button>
            <button onClick={()=>handleEdit(completed)}><i className="far fa-edit"></i></button>
            <button onClick={()=>handleDelete(completed)}><i className="far fa-trash-alt"></i></button>
        </div>
        </li>
        )}
        </ul>
    )
}
//todos={todos} setTodos={setTodos} 