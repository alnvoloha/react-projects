import filtersConfig from "./filtersConfig";

const applyFilters = (products, activeFilters) => {
  return products.filter((product) => {
    return filtersConfig.every(({ id, filterFunction }) => {
      const value = activeFilters[id];
      return value === "" || value === null || (Array.isArray(value) && value.length === 0) || filterFunction(product, value);
    });
  });
};

export default applyFilters;
