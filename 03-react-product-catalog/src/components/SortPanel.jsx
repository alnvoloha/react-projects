import React from "react";
import styles from "./SortPanel.module.css";

const SortPanel = ({ sortOptions, sortType, onSortChange }) => (
  <div className={styles.sortPanel}>
    {sortOptions.map((option) => (
      <button
        key={option.id}
        className={`${styles.button} ${
          sortType === option.id ? styles.active : ""
        }`}
        onClick={() => onSortChange(option.id)}
      >
        {option.label}
      </button>
    ))}
  </div>
);

export default SortPanel;
