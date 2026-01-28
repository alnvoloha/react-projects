import React from "react";
import Task from "./Task";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filterUncompleted: false,
      title: "",
      description: "",
      errorMessage: "",
    };
  }

  isValidTitle = (title) => {
    return title.length > 0;
  };

  handleAddTask = () => {
    const title = this.state.title;
    const description = this.state.description;
    const trimmedTitle = title.trim();

    if (!this.isValidTitle(trimmedTitle)) {
      this.setState({
        errorMessage:
          "Error! Task title can not be empty or consist of leading/trailing spaces.",
      });
      return;
    }

    const NEW_TASK = {
      id: Date.now(),
      title: trimmedTitle,
      description: description,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, NEW_TASK],
      title: "",
      description: "",
      errorMessage: "",
    }));
  };

  handleDeleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  handleToggleCompletion = (taskId) => {
    //status of solving problem
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  handleFilterToggle = () => {
    //change  to only uncompleted
    this.setState((prevState) => ({
      filterUncompleted: !prevState.filterUncompleted,
    }));
  };

  handleInputChange = (field, value) => {
    //update title or description
    this.setState({ [field]: value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleAddTask();
    }
  };

  render() {
    const { tasks, filterUncompleted, title, description, errorMessage } =
      this.state;

    const displayedTasks = tasks
      .filter((task) => (filterUncompleted ? !task.completed : true))
      .sort((a, b) => a.completed - b.completed);

    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <div className="input-section">
          <input
            type="text"
            value={title}
            onChange={(e) => this.handleInputChange("title", e.target.value)}
            placeholder="Task Title"
            onKeyDown={this.handleKeyPress}
          />
          <input
            type="text"
            value={description}
            onChange={(e) =>
              this.handleInputChange("description", e.target.value)
            }
            placeholder="Task Description"
            onKeyDown={this.handleKeyPress}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <div className="filter-section">
          <label>
            <input
              type="checkbox"
              checked={filterUncompleted}
              onChange={this.handleFilterToggle}
            />
            Only uncompleted
          </label>
        </div>
        <div className="task-list">
          {displayedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={this.handleDeleteTask}
              onToggleCompletion={this.handleToggleCompletion}
            />
          ))}
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  }
}

export default TodoList;
