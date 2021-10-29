import React from "react";
import { DiscountsBlock } from "../components/DiscountsBlock/DiscountsBlock";

import s from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={s.home}>
      <DiscountsBlock />
    </div>
  );
};
