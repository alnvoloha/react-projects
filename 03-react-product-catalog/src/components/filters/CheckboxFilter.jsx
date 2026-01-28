import React from "react";
import styles from "../FilterPanel.module.css";

const CheckboxFilter = ({ id, label, options, selectedOptions, onChange }) => (
  <div className={styles.filterGroup}>
    <label className={styles.filterLabel}>{label}</label>
    <div className={styles.colorCheckbox}>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() =>
              onChange(
                selectedOptions.includes(option)
                  ? selectedOptions.filter((v) => v !== option)
                  : [...selectedOptions, option]
              )
            }
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxFilter;
