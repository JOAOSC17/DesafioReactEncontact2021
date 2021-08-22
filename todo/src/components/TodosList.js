import React from 'react'

export default function TodosList({todos, setTodos}) {
    return (
        <ul className="todo-todo__list">
      {todos.map((todo) =>
      <li className="todo-todo__list-item"><input type="text" value={todo.title} className="list-item___item" onChange={(e)=>e.preventDefault()}/>
      <div>
          <button>Checked</button>
          <button>Edit</button>
          <button>Trash</button>
      </div>
      </li>
        )}
      </ul>
    )
}
