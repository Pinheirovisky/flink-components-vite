import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import Breadcrumbs from "./Breadcrumbs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const history = createMemoryHistory();

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Router history={history}>
    <div
      style={{
        display: "flex",
        height: "200px",
        width: "80%",
      }}
    >
      <Breadcrumbs {...args} />
    </div>
  </Router>
);
const TemplateDark: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Router history={history}>
    <div
      style={{
        display: "flex",
        height: "200px",
        width: "80%",
        background: "#4B5262",
      }}
    >
      <Breadcrumbs {...args} />
    </div>
  </Router>
);

const paths = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "Cadastro", url: "/dashboard/registrar" },
  { label: "Perfil de Acesso", url: "/dashboard/registrar/perfil" },
];

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  paths,
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  theme: "dark",
  paths,
};
