import React from "react";
import { LinksRow } from "../components/LinksRow/LinksRow";
import s from "./Footer.module.scss";

export const Footer = () => {
  const rows = [
    {
      title: "Title",
      linksList: [
        {
          title: "link",
          link: "/",
        },
        {
          title: "link",
          link: "/",
        },
      ],
    },
    {
      title: "Title",
      linksList: [
        {
          title: "link",
          link: "/",
        },
        {
          title: "link",
          link: "/",
        },
        {
          title: "link",
          link: "/",
        },
        {
          title: "link",
          link: "/",
        },
      ],
    },
    {
      title: "Title",
      linksList: [
        {
          title: "link",
          link: "/",
        },
        {
          title: "link",
          link: "/",
        },
        {
          title: "link",
          link: "/",
        },
      ],
    },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.row}>
            <div className={s.title}>
              <p>Title</p>
            </div>
            <div className={s.phoneLink}>
              <a href="tel:89999999999">+7 (999) 999-99-99</a>
            </div>
            <div className={s.socialLinks}>
              <a href="#">
                <img src="images/footer/instagram.svg" alt="" />
              </a>
              <a href="#">
                <img src="images/footer/icon-1.svg" alt="" />
              </a>
              <a href="#">
                <img src="images/footer/icon-2.svg" alt="" />
              </a>
            </div>
          </div>

          {rows.map((row, i) => {
            return <LinksRow row={row} />;
          })}
        </div>
        <div className={s.bottom}>copyright 2021</div>
      </div>
    </footer>
  );
};
