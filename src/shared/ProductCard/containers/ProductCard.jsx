import React from "react";
import { ButtonsBlock } from "../components/ButtonsBlock/ButtonsBlock";

import s from "./ProductCard.module.scss";

export const ProductCard = ({ card }) => {
  const {
    imgLink = "/images/global/emptyPhoto.png",
    title,
    price,
    oldPrice = null,
  } = card;

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
          <p>{price} руб.</p>
        </div>
        {oldPrice && (
          <div className={s.oldPrice}>
            <p>{oldPrice} руб.</p>
          </div>
        )}
      </div>
    </div>
  );
};
