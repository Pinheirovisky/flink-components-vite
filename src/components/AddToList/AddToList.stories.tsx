import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ComplementFieldType } from "protocols/table";

import AddToList from "./AddToList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/AddToList",
  component: AddToList,
} as ComponentMeta<typeof AddToList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof AddToList> = (args) => (
  <div
    style={{
      display: "flex",
      height: "200px",
      width: "80%",
    }}
  >
    <AddToList {...args} />
  </div>
);
const TemplateDark: ComponentStory<typeof AddToList> = (args) => (
  <div
    style={{
      display: "flex",
      height: "200px",
      width: "80%",
      background: "#4B5262",
    }}
  >
    <AddToList {...args} />
  </div>
);

const testData = [
  { value: "1", label: "tipo 1" },
  { value: "2", label: "tipo 2" },
  { value: "3", label: "tipo 3" },
];

const testUserData = [{ value: "4", label: "tipo A" }];

const testSetUserData = (value: ComplementFieldType[]) => {
  return value;
};

const testValidationMsg = "This is a test.";

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  data: testData,
  userData: testUserData,
  setUserData: testSetUserData,
  validationMsg: testValidationMsg,
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  theme: "dark",
  data: testData,
  userData: testUserData,
  setUserData: testSetUserData,
  validationMsg: testValidationMsg,
};
