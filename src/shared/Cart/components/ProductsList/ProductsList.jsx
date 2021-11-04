import React from "react";
import { Product } from "./Product";

import s from "./ProductsList.module.scss";

export const ProductsList = ({ products }) => {
  return (
    <div className={s.productsList}>
      {products.map((product, i) => (
        <Product key={`${i}_${product.price}`} product={product} />
      ))}
    </div>
  );
};
