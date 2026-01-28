import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => (
  <div className={styles.productList}>
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
