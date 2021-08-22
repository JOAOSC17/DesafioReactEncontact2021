import React from 'react'
export default function Form({input, setInput, todos, setTodos}){
    const onInputChange = (e)=>{
        setInput(e.target.value);
    }
    const onFormSubmit = (e)=>{
        e.preventDefault();
        setTodos([...todos, {title: input, isDone:false}]);
        setInput('');
    }
    return (
        <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="What the Hell Task..."
      value={input} required onChange={onInputChange}
      name="" className="todo-todo__input"/>
        </form>
    )
}
