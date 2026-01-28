import React from "react";
import styles from "../FilterPanel.module.css";

const RangeFilter = ({ id, label, range, onChange }) => (
  <div className={styles.filterGroup}>
    <label className={styles.filterLabel}>{label}</label>
    <div className={styles.priceInputs}>
      <input
        type="number"
        min="0"
        placeholder="Мин"
        value={range.min || ""}
        onChange={(e) =>
          onChange({
            ...range,
            min: Math.max(0, Number(e.target.value)),
          })
        }
      />
      <span className={styles.dash}>—</span>
      <input
        type="number"
        min="0"
        placeholder="Макс"
        value={range.max || ""}
        onChange={(e) =>
          onChange({
            ...range,
            max: Math.max(0, Number(e.target.value)),
          })
        }
      />
    </div>
  </div>
);

export default RangeFilter;
