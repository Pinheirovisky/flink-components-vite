import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "styled-components";

import { darkMain, lightMain } from "../../themes/main";
import ProfileCard from "./ProfileCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/ProfileCard",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof ProfileCard> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "200px",
      width: "80%",
    }}
  >
    <ProfileCard {...args} />
  </div>
);

const TemplateDark: ComponentStory<typeof ProfileCard> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "200px",
      width: "80%",
      background: "#4B5262",
    }}
  >
    <ProfileCard {...args} />
  </div>
);

export const Light = TemplateLight.bind({});
Light.args = {
  logoutUrl: "",
  theme: "light",
  name: "Dev Front-End",
  isOpen: true,
};
export const Dark = TemplateDark.bind({});
Dark.args = {
  logoutUrl: "",
  theme: "dark",
  name: "Dev Front-End",
  isOpen: true,
};
