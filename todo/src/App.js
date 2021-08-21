import React from 'react';
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
  console.log(tasks);
  return (
    <div className="todo">
      <h1 className="todo-title">todo</h1>
      <div className="todo-todo">
      <input type="text" name="" className="todo-todo__input"/>
     <ul className="todo-todo__list">
      {tasks.map((task, index) =>
      <li className="todo-todo__list-item" key={index}>{task.title}</li>
        )}
      </ul>
      </div>
    </div>
  );
}

export default App;
