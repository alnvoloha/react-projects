import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ hover: true });
  };

  handleMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { task, onDelete, onToggleCompletion } = this.props;
    const { hover } = this.state;

    return (
      <div
        className={`task-item ${task.completed ? "completed" : ""}`} //for css
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)} // state of problem
        />
        <div className="task-details">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div
          className={`task-time ${hover ? "hover-delete" : ""}`} // css for delete
          onClick={() => onDelete(task.id)}
        >
          {hover ? "Delete" : task.createdAt}
        </div>
      </div>
    );
  }
}

export default Task;
