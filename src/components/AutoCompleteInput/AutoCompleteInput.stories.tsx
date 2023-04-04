import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import { lightMain } from "../../themes/main";
import AutoCompleteInput from "./AutoCompleteInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/AutoCompleteInput",
  component: AutoCompleteInput,
} as ComponentMeta<typeof AutoCompleteInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof AutoCompleteInput> = (args) => (
  <ThemeProvider theme={lightMain}>
    <AutoCompleteInput {...args} />
  </ThemeProvider>
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  citiesData: [{ PR: [] }],
  getFilterPlacesRequest: () => true,
  secondary: true,
  uf: "uf",
  defaultValue: "Curitiba",
  label: "Cidade",
  onChangeValue: () => true,
};
