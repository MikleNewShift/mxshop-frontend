import React from "react";
import { Link } from "react-router-dom";

import s from "./Card.module.scss";

export const Card = ({ card }) => {
  const { id, title, path } = card;

  return (
    <Link to={`/catalog/${path}`}>
      <div className={s.card}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
