import React from "react";

import s from "./NavBar.module.scss";

export const NavBar = () => {
  const links = [
    {
      name: "Каталог",
      path: "/",
    },
    {
      name: "Хиты продаж",
      path: "/hits",
    },
    {
      name: "Оплата и доставка",
      path: "/payment",
    },
    {
      name: "О нас",
      path: "/about",
    },
    {
      name: "Контакты",
      path: "/contacts",
    },
  ];

  return (
    <nav className={s.navbar}>
      {links.map((link, i) => {
        return (
          <div className={s.link} key={`${i}_${link.path}`}>
            <a href={`${link.path}`}>{link.name}</a>
          </div>
        );
      })}
    </nav>
  );
};
