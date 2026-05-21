import { RiDeleteBack2Fill } from "react-icons/ri";
import { update_todo } from "../api/endpoints";
import { useState } from "react";

const Todo = ({ id, todo_list, completed, deleteTodo }) => {
    const [isChecked, setIsChecked] = useState(completed);

  const handleDelete = async() => {
    await deleteTodo(id);
  }

  const handleCompleted = async (e) => {
    update_todo(id, !isChecked);
    setIsChecked(!isChecked);
  }

  return (
    <div className="todo">
      <div className="todo-container">
        <input checked={isChecked} type="checkbox" onClick={handleCompleted} />
        <h3>{todo_list}</h3>
        <RiDeleteBack2Fill onClick={handleDelete} size="22px"/>
      </div>
    </div>
  );

}

export default Todo;
