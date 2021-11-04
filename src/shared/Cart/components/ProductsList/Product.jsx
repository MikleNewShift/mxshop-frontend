import React, { useState } from "react";

import s from "./Product.module.scss";

export const Product = ({ product }) => {
  const [count, setCount] = useState(1);

  const { imgLink, title, price, oldPrice } = product;

  return (
    <div className={s.product}>
      <div className={s.left}>
        <div className={s.image}>
          <img src={`${imgLink}`} alt="" />
        </div>
        <div className={s.info}>
          <div className={s.title}>
            <p>{title}</p>
          </div>
          <div className={s.counter}>
            <div
              className={s.button}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <img src="images/cart/minus.svg" alt="" />
            </div>
            <div className={s.text}>
              <p>{count}</p>
            </div>
            <div
              className={s.button}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <img src="images/cart/plus.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.price}>
        <p>{price * count} руб.</p>
      </div>
    </div>
  );
};
