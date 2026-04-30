
import { useState } from 'react';

const AddTodo = ({ addTodo }) => {

  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  }

  return (
    <div className="add-todo">
      <input onChange={(e) => setInput(e.target.value)} className="add-input" type="text" id="todo-name" placeholder="Enter todo name" />
      <button onClick={handleAddTodo} className="add-button">Add a Todo</button>
    </div>
  );
};

export default AddTodo;
