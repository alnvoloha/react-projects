import React from "react";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => (
  <div className={styles.productItem}>
    <div className={styles.productImageContainer}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={styles.productImage}
      />
    </div>
    <h3 className={styles.productName}>{product.name}</h3>
    <p className={styles.productDescription}>{product.description}</p>
    <p className={styles.productPrice}>Цена: {product.price} ₽</p>
    <p className={styles.productRating}>Рейтинг: {product.rating}</p>
    <p className={styles.productColor}>Цвет: {product.color}</p>
  </div>
);

export default ProductItem;
