import React, { useState } from "react";

import s from "./ButtonsBlock.module.scss";

export const ButtonsBlock = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className={`${s.button} ${count ? s.addButton : ""}`}>
        {count ? (
          <div className={s.groupButtons}>
            <div
              className={s.leftBtn}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <p>-</p>
            </div>
            <div className={s.counter}>
              <p>{count}</p>
            </div>
            <div
              className={s.rightBtn}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <p>+</p>
            </div>
          </div>
        ) : (
          <img src="/images/card/Cart.svg" alt="" />
        )}
      </button>
      {!count && (
        <button className={s.button}>
          <img src="/images/card/Search.svg" alt="" />
        </button>
      )}
    </>
  );
};
