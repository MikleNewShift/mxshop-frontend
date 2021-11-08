import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";

import s from "./Catalog.module.scss";

export const Catalog = () => {
  const [loader, setLoader] = useState(true);
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MikleNewShift/mxshop-server/categories"
    )
      .then((response) => response.json())
      .then((json) => {
        setCatalog(json);
        setLoader(false);
      });
  }, []);

  return (
    <div className={s.catalog}>
      {loader ? "Загрузка..." : ""}
      {catalog.map((card, i) => (
        <Card key={`${i}_${card.path}`} card={card} />
      ))}
    </div>
  );
};
