import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Router } from "react-router";

import { createMemoryHistory } from "history";

import Pagination from "./Pagination";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const history = createMemoryHistory();

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof Pagination> = (args) => (
  <Router history={history}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "200px",
        width: "80%",
      }}
    >
      <Pagination {...args} />
    </div>
  </Router>
);

const TemplateDark: ComponentStory<typeof Pagination> = (args) => (
  <Router history={history}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "200px",
        width: "80%",
        background: "#4B5262",
      }}
    >
      <Pagination {...args} />
    </div>
  </Router>
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  currentPage: 3,
  total: 5,
  clearData: undefined,
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  theme: "dark",
  currentPage: 1,
  total: 3,
  clearData: undefined,
};
