import React from "react";
import styles from "../FilterPanel.module.css";

const TextFilter = ({ id, label, value, onChange }) => (
  <div className={styles.filterGroup}>
    <label className={styles.filterLabel}>{label}</label>
    <input
      type="text"
      className={styles.filterInput}
      placeholder="Поиск"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextFilter;
