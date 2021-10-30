import React from "react";
import { ProductCard } from "../../../shared/ProductCard/containers/ProductCard";
import { CardsCarousel } from "../components/CardsCarousel/CardsCarousel";
import { DiscountsBlock } from "../components/DiscountsBlock/DiscountsBlock";

import s from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={s.home}>
      <DiscountsBlock />
      <CardsCarousel />
    </div>
  );
};
