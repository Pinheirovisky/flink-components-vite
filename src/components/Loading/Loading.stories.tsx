import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";

import Loading from "./Loading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof Loading> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "200px",
      width: "80%",
    }}
  >
    <Loading {...args} />
  </div>
);

const TemplateDark: ComponentStory<typeof Loading> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "200px",
      width: "80%",
      background: "#4B5262",
    }}
  >
    <Loading {...args} />
  </div>
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  theme: "dark",
};
