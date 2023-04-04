import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";

import ComplementButton from "./ComplementButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/ComplementButton",
  component: ComplementButton,
} as ComponentMeta<typeof ComplementButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof ComplementButton> = (args) => (
  <ComplementButton {...args} />
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  children: "Clique me",
};
