import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
  if (todo.isCompleted) {
    return (
      <div className={`${styles.todo} ${styles.completedTodo}`}>
        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>{todo.text}</div>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck className={styles.checkIcon} onClick={toggleTodo} />
      </div>
    );
  }
  return (
    <div className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className={styles.checkIcon} onClick={toggleTodo} />
    </div>
  );
}

export default Todo;
