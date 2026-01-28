const filtersConfig = [
    {
      id: "color",
      label: "Цвет",
      type: "checkbox",
      options: ["Черный", "Красный", "Белый", "Синий", "Бежевый", "Коричневый"],
      filterFunction: (product, selectedColors) =>
        selectedColors.length === 0 || selectedColors.includes(product.color),
    },
    {
      id: "priceRange",
      label: "Цена",
      type: "range",
      filterFunction: (product, range) => {
        const min = range.min ?? 0;
        const max = range.max ?? Infinity;
        return product.price >= min && product.price <= max;
      },
    },
    {
      id: "search",
      label: "Поиск",
      type: "text",
      filterFunction: (product, searchTerm) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase().trim();
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const terms = term.split(" ");
        return terms.every((word) => name.includes(word) || description.includes(word));
      },
    },
  ];
  
  export default filtersConfig;
  