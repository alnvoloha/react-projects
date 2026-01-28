const colors = ["Черный", "Красный", "Белый", "Синий", "Бежевый", "Коричневый"];
const categories = [
  "Одежда",
  "Обувь",
  "Аксессуары",
  "Спорт",
  "Электроника",
  "Игрушки",
  "Дом",
  "Сад",
  "Косметика",
  "Бижутерия",
];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min, max, decimals = 1) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

const makePlaceholder = (text) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect width="100%" height="100%" fill="#f2f2f2"/>
      <rect x="18" y="18" width="264" height="264" rx="16" fill="#e9e9e9"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="system-ui, -apple-system, Segoe UI, Roboto, Arial"
            font-size="28" fill="#444">
        ${text}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const generateProducts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Продукт ${i + 1}`,
    description: `Описание для продукта ${i + 1}. Содержит несколько случайных слов.`,
    color: getRandomElement(colors),
    category: getRandomElement(categories),
    price: getRandomInt(10, 9999),
    rating: getRandomFloat(0, 5),
    imageUrl: makePlaceholder(`Product ${i + 1}`), // ← больше никаких внешних запросов
  }));
};

export default generateProducts;
