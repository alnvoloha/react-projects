import React, { Component } from "react";
import styles from "./TaskForm.module.css";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      priority: "Средне",
      errorMessage: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, priority } = this.state;

    if (title.trim() === "") {
      this.setState({ errorMessage: "Название задачи не может быть пустым" });
      return;
    }

    this.setState({ errorMessage: "" });

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    this.props.onAddTask(newTask);

    this.setState({ title: "", description: "", priority: "Средне" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  };

  render() {
    const { title, description, priority, errorMessage } = this.state;

    return (
      <form className={styles.taskForm} onSubmit={this.handleSubmit}>
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Название задачи"
            className={styles.inputTitle}
            onKeyDown={this.handleKeyPress}
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Описание задачи"
            className={styles.inputDescription}
            onKeyDown={this.handleKeyPress}
          />
        </div>
        <div className={styles.priorityGroup}>
          <label>
            <input
              type="radio"
              name="priority"
              value="Срочно"
              checked={priority === "Срочно"}
              onChange={this.handleChange}
            />
            Срочно
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="Средне"
              checked={priority === "Средне"}
              onChange={this.handleChange}
            />
            Средне
          </label>
          <label>
            <input
              type="radio"
              name="priority"
              value="Не срочно"
              checked={priority === "Не срочно"}
              onChange={this.handleChange}
            />
            Не срочно
          </label>
        </div>
        <button type="submit" className={styles.addTaskButton}>
          Добавить задачу
        </button>
      </form>
    );
  }
}

export default TaskForm;
