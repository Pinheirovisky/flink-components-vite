import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  type: "button",
  size: "small",
  callbackFunc: () => true,
  children: "Clique me!",
};
