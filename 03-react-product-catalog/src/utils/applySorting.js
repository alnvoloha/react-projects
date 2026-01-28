import sortConfig from "./sortConfig";

const applySorting = (products, sortType) => {
  const sortOption = sortConfig.find((option) => option.id === sortType);
  if (!sortOption) return products; 
  return [...products].sort(sortOption.sortFunction);
};

export default applySorting;
