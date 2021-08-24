import React from 'react'

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
    <li className="todo-todo__list-item" key={active.title}>
    <span className="todo-todo__list-item-title">{active.title}</span>  
    <div className="todo-todo__list-item-btns">
    <button onClick={()=>handleComplete(active)}>{active.isDone? (<i className="fas fa-check-square"></i>) : (<i className="far fa-check-square"></i>)}</button>
    <button onClick={()=>handleEdit(active)}><i className="far fa-edit"></i></button>
    <button onClick={()=>handleDelete(active)}><i className="far fa-trash-alt"></i></button>
</div>
</li>
    )}
    </ul>
)
}
//todos={todos} setTodos={setTodos}
//  <ComponentsTodosList key={active.id} active={active}  setEditTodo={setEditTodo}/>