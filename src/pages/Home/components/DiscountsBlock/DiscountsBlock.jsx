import React from "react";
import { DiscountCard } from "../../../../shared/DiscountCard/DiscountCard";

import s from "./DiscountsBlock.module.scss";

export const DiscountsBlock = () => {
  const card = {
    title: "Test",
    description: "Description",
    small: false,
  };

  const smallCard = {
    title: "Test",
    description: "Description",
    small: true,
  };

  return (
    <div className={s.discountBlock}>
      <div className={s.main}>
        <DiscountCard card={card} />
      </div>
      <div className={s.second}>
        <div className={s.halfCard}>
          <DiscountCard card={smallCard} />
        </div>
        <div className={s.halfCard}>
          <DiscountCard card={smallCard} />
        </div>
      </div>
    </div>
  );
};
