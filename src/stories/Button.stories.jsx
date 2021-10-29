import React from "react";

import { Button } from "./../shared/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  icon: false,
  text: "Button",
};

export const Link = Template.bind({});

Link.args = {
  ...Primary.args,
  type: "link",
};
