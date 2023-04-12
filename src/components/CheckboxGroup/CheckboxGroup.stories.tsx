import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { mockCities } from "mocks";

import CheckboxGroup from "./CheckboxGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/CheckboxGroup",
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  data: mockCities,
  citiesData: [mockCities],
  callbackFunc: undefined,
};
