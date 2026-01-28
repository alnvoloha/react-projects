import React, { useState, useMemo } from "react";
import generateProducts from "./utils/generateProducts";
import FilterPanel from "./components/FilterPanel";
import SortPanel from "./components/SortPanel";
import ProductList from "./components/ProductList";
import applyFilters from "./utils/applyFilters";
import applySorting from "./utils/applySorting";
import filtersConfig from "./utils/filtersConfig";
import sortConfig from "./utils/sortConfig";
import styles from "./App.module.css";

const App = () => {
  const [products] = useState(generateProducts(20));
  const [activeFilters, setActiveFilters] = useState(
    filtersConfig.reduce((acc, { id, type }) => {
      acc[id] =
        type === "checkbox"
          ? []
          : type === "range"
          ? { min: null, max: null }
          : "";
      return acc;
    }, {})
  );
  const [sortType, setSortType] = useState("cheap-first");

  const handleFilterChange = (id, value) => {
    setActiveFilters((prevFilters) => ({ ...prevFilters, [id]: value }));
  };

  const handleSortChange = (type) => {
    setSortType((prevSortType) =>
      prevSortType === type ? "cheap-first" : type
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    const filteredProducts = applyFilters(products, activeFilters);
    return applySorting(filteredProducts, sortType);
  }, [products, activeFilters, sortType]);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Каталог</h1>
      <FilterPanel
        filters={filtersConfig}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />
      <SortPanel
        sortOptions={sortConfig}
        sortType={sortType}
        onSortChange={handleSortChange}
      />
      <ProductList products={filteredAndSortedProducts} />
    </div>
  );
};

export default App;
