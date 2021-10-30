import React from "react";
import { ButtonsBlock } from "../components/ButtonsBlock/ButtonsBlock";

import s from "./ProductCard.module.scss";

export const ProductCard = ({ card }) => {
  const { imgLink, title, price, oldPrice } = card;

  return (
    <div className={s.card}>
      <div className={s.img}>
        {imgLink && <img src={imgLink} alt="" />}
        <div className={s.headebleBtns}>
          <ButtonsBlock />
        </div>
      </div>
      <div className={s.title}>
        <p>{title}</p>
      </div>
      <div className={s.priceBlock}>
        <div className={s.price}>
          <p>{price}</p>
        </div>
        {oldPrice && (
          <div className={s.oldPrice}>
            <p>{oldPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};
