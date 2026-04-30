import { RiDeleteBack2Fill } from "react-icons/ri";


const Todo = ({ id, todo_list, deleteTodo }) => {

  const handleDelete = () => {
    deleteTodo(id);
  }

  return (
    <div className="todo">
      <div className="todo-container">
        <input type="checkbox"/>
        <h3>{todo_list}</h3>
        <RiDeleteBack2Fill onClick={handleDelete} size="22px"/>
      </div>
    </div>
  );

}

export default Todo;
