import Todo from "./Todo";

const Todolist = ({ todos, deleteTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} id={todo.id} todo_list={todo.todo_name} completed={todo.completed} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}

export default Todolist;
