import React, { useState } from "react";
import { Button } from "../../Button/Button";
import { ProductsList } from "../components/ProductsList/ProductsList";

import s from "./Cart.module.scss";

export const Cart = (props) => {
  const { hidden, setHidden } = props;

  const products = [
    {
      imgLink:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
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
    <div className={`${s.cart} ${hidden ? s.hidden : ""}`}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.title}>
            <h2>Cart</h2>
          </div>
          <button
            className={s.clodeBtn}
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 17.5L17.5 1" stroke="#AFB1BD" strokeWidth="2" />
              <path
                d="M17.5 17.5L0.999999 1"
                stroke="#AFB1BD"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <ProductsList products={products} />
        <div className={s.total}>
          <div className={s.text}>
            <p>Title</p>
          </div>
          <div className={s.price}>
            <p>price</p>
          </div>
        </div>
        <div className={s.total}>
          <div className={s.text}>
            <p>Title</p>
          </div>
          <div className={s.price}>
            <p>price</p>
          </div>
        </div>
        <div className={s.checkoutBtn}>
          <Button text={"Checkout"} icon={true} big={true} />
        </div>
      </div>
    </div>
  );
};
