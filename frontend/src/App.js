import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import { getTodos, createTodo, delete_todo } from './api/endpoints';

import Todolist from './components/Todolist';

import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    }

    fetchTodos();
  }, []);

  const addTodo = async (todo_name) => {
    const todo = await createTodo(todo_name);
    setTodos([todo, ...todos]);
  }

  const deleteTodo = async (id) => {
    await delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo App</h1>
          <AddTodo addTodo={addTodo} />
          <Todolist todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
