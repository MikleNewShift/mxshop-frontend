import React from "react";

import { Button } from "../Button/Button";

import s from "./DiscountCard.module.scss";

export const DiscountCard = ({ card }) => {
  const { title, description, small } = card;

  return (
    <div className={s.discountCard}>
      <div className={s.container}>
        <div className={s.title}>
          <h3>{title}</h3>
        </div>
        <div className={s.description}>
          <p>{description}</p>
        </div>
        <div className={s.button}>
          <Button text={"Button"} type={small ? "link" : ""} icon />
        </div>
      </div>
    </div>
  );
};
