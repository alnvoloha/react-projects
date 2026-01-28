
export function applyFilters(products, filters) {
    const filteredProducts = products.filter((product) => 
      filters.every(({ filterFunction, value }) => {
        if (value === "" || value === null || (Array.isArray(value) && value.length === 0)) {
          return true;
        }
        return filterFunction(product, value);
      })
    );
    return filteredProducts;
  }
  
  export function applySorting(products, sortType) {
    const sortedProducts = [...products].sort((a, b) => {
      switch (sortType) {
        case "cheap-first":
          return a.price - b.price;
        case "expensive-first":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    return sortedProducts;
  }
  