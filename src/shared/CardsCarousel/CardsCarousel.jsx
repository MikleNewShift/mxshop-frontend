import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";

import s from "./CardsCarousel.module.scss";

import { ProductCard } from "./../ProductCard/containers/ProductCard";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export const CardsCarousel = ({ cards }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={s.carousel}>
      <div className={s.title}>
        <h2>Title</h2>
        <div className={s.navArrows}>
          <div className={s.arrowLeft} ref={navigationPrevRef}>
            <svg
              width="21"
              height="9"
              viewBox="0 0 21 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.85981 0.116733C5.6729 -0.0389109 5.36985 -0.0389109 5.18293 0.116733L0.140187 4.31579L0.0840028 4.37195C-0.0467075 4.53002 -0.0245865 4.74876 0.148335 4.88605L5.19108 8.88989L5.25866 8.93468C5.44823 9.03856 5.70562 9.01808 5.86777 8.87648L5.92156 8.8202C6.04631 8.66236 6.02172 8.44802 5.85166 8.31301L1.67891 5H20.5238L20.6094 4.99194C20.8315 4.94961 21 4.74546 21 4.5C21 4.22386 20.7868 4 20.5238 4H1.87229L5.85981 0.680368L5.91519 0.625171C6.04442 0.469841 6.02596 0.255083 5.85981 0.116733Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={s.arrowRight} ref={navigationNextRef}>
            <svg
              width="21"
              height="9"
              viewBox="0 0 21 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.1402 0.116733C15.3271 -0.0389109 15.6302 -0.0389109 15.8171 0.116733L20.8598 4.31579L20.916 4.37195C21.0467 4.53002 21.0246 4.74876 20.8517 4.88605L15.8089 8.88989L15.7413 8.93468C15.5518 9.03856 15.2944 9.01808 15.1322 8.87648L15.0784 8.8202C14.9537 8.66236 14.9783 8.44802 15.1483 8.31301L19.3211 5H0.976191L0.890594 4.99194C0.668451 4.94961 0.5 4.74546 0.5 4.5C0.5 4.22386 0.713198 4 0.976191 4H19.1277L15.1402 0.680368L15.0848 0.625171C14.9556 0.469841 14.974 0.255083 15.1402 0.116733Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={`${i}_${card.price}`}>
            <ProductCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
