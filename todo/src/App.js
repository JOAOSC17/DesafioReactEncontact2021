import React, { useEffect, useState } from 'react';
import ComponentsForm from './components/Form';
import ComponentsHeader from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import PageAll from './pages/All';
import PageActive from './pages/Active';
import PageCompleted from './pages/Completed';
import ComponentsNavegationFilter from './components/NavegationFilter';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [completeds, setCompleteds] = useState([]);
  const [actives, setActives] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
useEffect(() => {
    setActives(todos);
    console.log(actives);
}, [todos]);
useEffect(() => {
  setCompleteds(todos);
}, [todos]);
  console.log(todos);
  return (
    <Router>
    <div className="todo">
      <Route path="/" component={ComponentsHeader}/>
      <div className="todo-todo">
        <ComponentsForm input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
     <Route exact path="/">
       <PageAll todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
     </Route>
     <Route exact path="/active">
       <PageActive todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} actives={actives} setActives={setActives} />
     </Route>
     <Route exact path="/completed">
       <PageCompleted  todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} completeds={completeds} setCompleteds={setCompleteds}  />
     </Route>
     <Route path="/">
       <ComponentsNavegationFilter todos={todos} setTodos={setTodos} actives={actives} setActives={setActives} />
     </Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
