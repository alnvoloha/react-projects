import React from "react";
import styles from "./FilterPanel.module.css";

class FilterPanel extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.filterUncompleted !== this.props.filterUncompleted ||
      nextProps.searchTerm !== this.props.searchTerm ||
      nextProps.selectedPriority !== this.props.selectedPriority
    );
  }

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    this.props.onFilterChange({ [name]: newValue });
  };

  render() {
    const { filterUncompleted, searchTerm, selectedPriority, onGenerateTasks } =
      this.props;

    return (
      <div className={styles.filterPanel}>
        <h3>Фильтры</h3>
        <div className={styles.filterUncompleted}>
          <label>
            <input
              type="checkbox"
              name="filterUncompleted"
              checked={filterUncompleted}
              onChange={this.handleChange}
            />
            Скрыть выполненные
          </label>
        </div>
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={this.handleChange}
          placeholder="Поиск задач..."
          className={styles.searchInput}
        />
        <h4>Важность</h4>
        <div className={styles.priorityFilter}>
          <label>
            <input
              type="radio"
              name="selectedPriority"
              value="Все"
              checked={selectedPriority === "Все"}
              onChange={this.handleChange}
            />
            Все
          </label>
          <label>
            <input
              type="radio"
              name="selectedPriority"
              value="Срочно"
              checked={selectedPriority === "Срочно"}
              onChange={this.handleChange}
            />
            Срочно
          </label>
          <label>
            <input
              type="radio"
              name="selectedPriority"
              value="Средне"
              checked={selectedPriority === "Средне"}
              onChange={this.handleChange}
            />
            Средне
          </label>
          <label>
            <input
              type="radio"
              name="selectedPriority"
              value="Не срочно"
              checked={selectedPriority === "Не срочно"}
              onChange={this.handleChange}
            />
            Не срочно
          </label>
        </div>
        <button onClick={onGenerateTasks} className={styles.generateButton}>
          Сгенерировать 1000 задач
        </button>
      </div>
    );
  }
}

export default FilterPanel;
