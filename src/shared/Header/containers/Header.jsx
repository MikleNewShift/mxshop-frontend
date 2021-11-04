import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../Cart/containers/Cart";
import { NavBar } from "../components/NavBar/NavBar";

import s from "./Header.module.scss";

export const Header = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.top}>
            <div className={s.city}></div>
            <div className={s.logo}>
              <Link to="/">mxShop</Link>
            </div>
            <div className={s.buttons}>
              <a href="">
                <img src="images/header/search.svg" alt="" />
              </a>
              <button
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                <div className={s.counter}>
                  <p>1</p>
                </div>
                <img src="images/header/cart.svg" alt="" />
              </button>
            </div>
          </div>
          <div className={s.bottom}>
            <NavBar />
          </div>
        </div>
      </header>
      <Cart hidden={hidden} setHidden={setHidden} />
    </>
  );
};
