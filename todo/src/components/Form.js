import React, { useEffect } from 'react'
export default function ComponentsForm({input, setInput, todos, setTodos, editTodo, setEditTodo}){
    const updateTodo =(id, title, isDone)=>{
        const newTodo = todos.map((todo)=>
        todo.id===id? {id, title, isDone} : todo
    );
        setTodos(newTodo);
        setEditTodo('');
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput('')
        }
},[setInput, editTodo])
    function generateID(){
        return Math.random().toString(36).substr(2,9);
    }
    const onInputChange = (e)=>{
        setInput(e.target.value);
    }
    const onFormSubmit = (e)=>{
        e.preventDefault();
        if(!editTodo){
        setTodos([...todos, {id:generateID(),title: input, isDone:false}]);
        setInput('');
        }else{
            updateTodo(editTodo.id, input, editTodo.isDone);
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="What the Hell Task..."
      value={input} required onChange={onInputChange}
      name="" className="todo-todo__input"/>
        </form>
    )
}

// <button onClick={()=>()}>clear completed</button>
// <button onClick={()=>()}>all</button>