import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "styled-components";

import { darkMain, lightMain } from "../../themes/main";
import ActionsBar from "./ActionsBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/ActionsBar",
  component: ActionsBar,
} as ComponentMeta<typeof ActionsBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof ActionsBar> = (args) => (
  <div
    style={{
      display: "flex",
      height: "200px",
      width: "100%",
    }}
  >
    <ActionsBar {...args} />
  </div>
);
const TemplateDark: ComponentStory<typeof ActionsBar> = (args) => (
  <div
    style={{
      display: "flex",
      height: "200px",
      width: "100%",
      background: "#4B5262",
    }}
  >
    <ActionsBar {...args} />
  </div>
);

const actions = [
  {
    label: "Button 1",
    disabled: false,
    action: (): void => {
      true;
    },
  },
  {
    label: "Button 2",
    disabled: false,
    action: (): void => {
      true;
    },
  },
];

export const Light = TemplateLight.bind({});
Light.args = {
  actions: actions,
  theme: "light",
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  actions: actions,
  theme: "dark",
};
