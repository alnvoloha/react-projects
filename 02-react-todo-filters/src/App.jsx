import React, { Component } from "react";
import FilterPanel from "./FilterPanel";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filters: {
        filterUncompleted: false,
        searchTerm: "",
        selectedPriority: "Все",
      },
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  handleAddTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  handleDeleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  handleToggleCompletion = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  handleFilterChange = (updatedFilters) => {
    this.setState((prevState) => ({
      filters: { ...prevState.filters, ...updatedFilters },
    }));
  };

  handleGenerateTasks = () => {
    const tasks = [];
    for (let i = 0; i < 1000; i++) {
      tasks.push({
        id: Date.now() + i,
        title: `Задача ${i + 1}`,
        description: `Описание задачи ${i + 1}`,
        priority: "Средне",
        completed: false,
        createdAt: new Date().toLocaleString(),
      });
    }

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, ...tasks],
    }));
  };

  render() {
    const { tasks, filters } = this.state;
    const { filterUncompleted, searchTerm, selectedPriority } = filters;

    return (
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Todo List</h1>
        <div className={styles.contentContainer}>
          <FilterPanel
            filterUncompleted={filterUncompleted}
            searchTerm={searchTerm}
            selectedPriority={selectedPriority}
            onFilterChange={this.handleFilterChange}
            onGenerateTasks={this.handleGenerateTasks}
          />
          <div className={styles.mainContainer}>
            <TaskForm onAddTask={this.handleAddTask} />
            <TaskList
              tasks={tasks}
              filterUncompleted={filterUncompleted}
              searchTerm={searchTerm}
              selectedPriority={selectedPriority}
              onDeleteTask={this.handleDeleteTask}
              onToggleCompletion={this.handleToggleCompletion}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
