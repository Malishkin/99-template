import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
