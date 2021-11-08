import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ErrorPage } from "../ErrorPage/ErrorPage";

import { ProductCard } from "./../../shared/ProductCard/containers/ProductCard";

import s from "./CategoryPage.module.scss";

export const CategoryPage = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/MikleNewShift/mxshop-server/categories?path=${category}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.length !== 0) {
          setId(json[0].id);
        } else setLoader(false);
      });
  }, []);

  useEffect(() => {
    if (id) {
      fetch(
        `https://my-json-server.typicode.com/MikleNewShift/mxshop-server/products?categoryId=${id}`
      )
        .then((response) => response.json())
        .then((json) => {
          setProducts(json);
          console.log(json);
          setLoader(false);
        });
    }
  }, [id]);

  return loader ? (
    <p>Загрузка...</p>
  ) : products.length === 0 ? (
    <ErrorPage />
  ) : (
    <div className={s.categoryWrapper}>
      {products.map((card, i) => (
        <ProductCard key={`${i}_${card.id}`} card={card} />
      ))}
    </div>
  );
};

// let filterCategories = json.map((category) => {
//     return category.path;
//   });

//   console.log(filterCategories);
//   setCategories(filterCategories);
//   setLoader(false);
