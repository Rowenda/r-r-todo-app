import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import { getTodos } from './api/endpoints';

import Todolist from './components/Todolist';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    }

    fetchTodos();
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo App</h1>
          <Todolist todos={todos} />
      </div>
    </div>
  );
}

export default App;
