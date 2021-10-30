import React from "react";
import { ProductCard } from "../../../shared/ProductCard/containers/ProductCard";
import { DiscountsBlock } from "../components/DiscountsBlock/DiscountsBlock";

import s from "./Home.module.scss";

export const Home = () => {
  const card = {
    imgLink:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
    title: "Title",
    price: 5000,
  };
  return (
    <div className={s.home}>
      <DiscountsBlock />
      <ProductCard card={card} />
    </div>
  );
};
