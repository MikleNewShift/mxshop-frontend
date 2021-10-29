import React from "react";

import { DiscountCard } from "../shared/DiscountCard/DiscountCard";

export default {
  title: "Example/DiscountCard",
  component: DiscountCard,
};

const Template = (args) => <DiscountCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Title",
  description: "Description",
  small: false,
};
