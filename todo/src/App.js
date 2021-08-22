import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodosList from './components/TodosList';
import './index.css';

function App() {
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
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(tasks);
  return (
    <div className="todo">
      <Header/>
      <div className="todo-todo">
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
     <TodosList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
