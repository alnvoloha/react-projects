const sortConfig = [
    {
      id: "cheap-first",
      label: "Сначала дешевые",
      sortFunction: (a, b) => a.price - b.price,
    },
    {
      id: "expensive-first",
      label: "Сначала дорогие",
      sortFunction: (a, b) => b.price - a.price,
    },
    {
      id: "rating",
      label: "Сначала популярные",
      sortFunction: (a, b) => b.rating - a.rating,
    },
  ];
  
  export default sortConfig;
  