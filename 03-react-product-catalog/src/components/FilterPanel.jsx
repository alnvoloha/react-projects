import React from "react";
import CheckboxFilter from "./filters/CheckboxFilter";
import RangeFilter from "./filters/RangeFilter";
import TextFilter from "./filters/TextFilter";
import styles from "./FilterPanel.module.css";

const FilterPanel = ({ filters, activeFilters, onFilterChange }) => (
  <div className={styles.filterPanel}>
    {filters.map((filter) => {
      const { id, type, label, options } = filter;
      const commonProps = {
        id,
        label,
        value: activeFilters[id],
        onChange: (value) => onFilterChange(id, value),
      };

      switch (type) {
        case "checkbox":
          return (
            <CheckboxFilter
              key={id}
              {...commonProps}
              options={options}
              selectedOptions={activeFilters[id]}
            />
          );
        case "range":
          return (
            <RangeFilter key={id} {...commonProps} range={activeFilters[id]} />
          );
        case "text":
          return <TextFilter key={id} {...commonProps} />;
        default:
          return null;
      }
    })}
  </div>
);

export default FilterPanel;
