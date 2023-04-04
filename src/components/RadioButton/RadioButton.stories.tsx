import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import RadioButton from "./RadioButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof RadioButton> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "200px",
      width: "80%",
    }}
  >
    <RadioButton {...args}>Selecionar</RadioButton>
  </div>
);

const TemplateDark: ComponentStory<typeof RadioButton> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "200px",
      width: "80%",
      background: "#4B5262",
    }}
  >
    <RadioButton {...args}>Selecionar</RadioButton>
  </div>
);

export const Light = TemplateLight.bind({});
Light.args = {
  checked: true,
  theme: "light",
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  checked: true,
  theme: "dark",
};
