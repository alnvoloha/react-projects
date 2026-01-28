import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task, onDeleteTask, onToggleCompletion }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.taskHeader}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className={styles.checkbox}
        />
        <div className={styles.taskContent}>
          <h3 className={styles.taskTitle}>{task.title}</h3>
          <p className={styles.taskDescription}>{task.description}</p>
        </div>
      </div>
      <div className={styles.taskFooter}>
        <span>
          {task.createdAt} | {task.priority}
        </span>
        <button
          onClick={() => onDeleteTask(task.id)}
          className={styles.deleteButton}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
