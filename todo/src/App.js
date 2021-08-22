import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodosList from './components/TodosList';
import './index.css';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
  console.log(todos);
  const tasks=[
    {
      "id": "flrGI",
      "title": "Lavar os pratos",
      "isDone": false
    },
    {
      "id": "Tw-I9",
      "title": "Cortar a grama",
      "isDone": true
    },
    {
      "id": "7f2sf",
      "title": "Comprar pão",
      "isDone": false
    }
  ]
  return (
    <div className="todo">
      <Header/>
      <div className="todo-todo">
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
     <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      </div>
    </div>
  );
}

export default App;
