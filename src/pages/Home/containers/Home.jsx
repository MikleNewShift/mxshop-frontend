import React from "react";
import { CardsCarousel } from "../../../shared/CardsCarousel/CardsCarousel";

import { DiscountsBlock } from "../components/DiscountsBlock/DiscountsBlock";

import s from "./Home.module.scss";

export const Home = () => {
  const cards = [
    {
      imgLink:
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      title: "Title",
      price: 2000,
      oldPrice: 3000,
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Title",
      price: 5000,
      oldPrice: 6000,
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
      title: "Title",
      price: 4000,
      oldPrice: 5000,
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
      title: "Title",
      price: 6000,
      oldPrice: 7000,
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
      title: "Title",
      price: 6000,
      oldPrice: 7000,
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
      title: "Title",
      price: 6000,
      oldPrice: 7000,
    },
  ];

  return (
    <div className={s.home}>
      <DiscountsBlock />
      <CardsCarousel cards={cards} />
      <CardsCarousel cards={cards} />
    </div>
  );
};
