import React from "react";

import s from "./LinksRow.module.scss";

export const LinksRow = (props) => {
  return (
    <div className={s.row}>
      <div className={s.title}>
        <p>{props.row.title}</p>
      </div>
      <div className={s.list}>
        {props.row.linksList.map((link, i) => {
          return <a href={`${link.path}`}>{link.title}</a>;
        })}
      </div>
    </div>
  );
};
