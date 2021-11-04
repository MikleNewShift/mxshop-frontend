import React from "react";

import { ProductCard } from "../shared/ProductCard/containers/ProductCard";

export default {
  title: "Example/ProductCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Card = Template.bind({});

Card.args = {
  card: {
    imgLink: "",
    title: "Title",
    price: "5000",
  },
};
