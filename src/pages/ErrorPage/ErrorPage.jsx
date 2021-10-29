import React from "react";

import s from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      <div className={s.title}>
        <h2>Страница не найдена</h2>
      </div>
      <div className={s.error}>
        <h2>404</h2>
      </div>
    </div>
  );
};
