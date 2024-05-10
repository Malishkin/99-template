import styles from "./Todo.module.css";

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
      <button className={styles.todoIcon} onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
