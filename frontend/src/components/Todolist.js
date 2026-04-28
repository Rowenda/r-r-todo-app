import Todo from "./Todo";

const Todolist = ({ todos }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} todo_list={todo.todo_name} />
            ))}
        </div>
    );
}

export default Todolist;
