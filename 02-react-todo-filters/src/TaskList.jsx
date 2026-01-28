import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

class TaskList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.tasks !== this.props.tasks ||
      nextProps.filterUncompleted !== this.props.filterUncompleted ||
      nextProps.searchTerm !== this.props.searchTerm ||
      nextProps.selectedPriority !== this.props.selectedPriority
    );
  }

  render() {
    const {
      tasks,
      filterUncompleted,
      searchTerm,
      selectedPriority,
      onDeleteTask,
      onToggleCompletion,
    } = this.props;

    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    const filteredTasks = tasks
      .filter((task) => {
        const matchesSearchTerm = task.title
          .toLowerCase()
          .includes(lowerCasedSearchTerm);
        const matchesPriority =
          selectedPriority === "Все" || task.priority === selectedPriority;
        const matchesCompletion = !filterUncompleted || !task.completed;

        return matchesSearchTerm && matchesPriority && matchesCompletion;
      })
      .sort((a, b) => a.completed - b.completed);

    return (
      <div className={styles.taskListContainer}>
        <h2 className={styles.title}>Список задач ({filteredTasks.length})</h2>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onToggleCompletion={onToggleCompletion}
            />
          ))
        ) : (
          <p>Задач по вашему запросу не найдено</p>
        )}
      </div>
    );
  }
}

export default TaskList;
