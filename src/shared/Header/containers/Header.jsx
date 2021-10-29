import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.city}></div>
          <div className={s.logo}>
            <Link to="/">mxShop</Link>
          </div>
        </div>
        <div className={s.bottom}>
          <NavBar />
        </div>
      </div>
    </header>
  );
};
