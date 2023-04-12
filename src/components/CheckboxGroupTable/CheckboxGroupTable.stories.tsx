import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { mockReferenceValue } from "mocks";

import CheckboxGroupTable from "./CheckboxGroupTable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/CheckboxGroupTable",
  component: CheckboxGroupTable,
} as ComponentMeta<typeof CheckboxGroupTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof CheckboxGroupTable> = (args) => (
  <CheckboxGroupTable {...args} />
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  data: mockReferenceValue,
  referenceValueData: [mockReferenceValue],
  callbackFunc: undefined,
};
