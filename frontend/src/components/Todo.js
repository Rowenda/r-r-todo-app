import { RiDeleteBack2Fill } from "react-icons/ri";


const Todo = ({todo_list}) => {
  return (
    <div className="todo">
      <div className="todo-container">
        <input type="checkbox"/>
        <h3>{todo_list}</h3>
        <RiDeleteBack2Fill size="22px"/>
      </div>
    </div>
  );

}

export default Todo;
