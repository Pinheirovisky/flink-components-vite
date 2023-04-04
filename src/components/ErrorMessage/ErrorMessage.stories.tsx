import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "styled-components";

import { lightMain } from "../../themes/main";
import ErrorMessage from "./ErrorMessage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/ErrorMessage",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof ErrorMessage> = (args) => (
  <ThemeProvider theme={lightMain}>
    <ErrorMessage {...args} />
  </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  children: "Mensagem de erro teste!",
};
