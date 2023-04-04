import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import NoResultsMessage from "./NoResultsMessage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/NoResultsMessage",
  component: NoResultsMessage,
} as ComponentMeta<typeof NoResultsMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof NoResultsMessage> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <NoResultsMessage {...args} />
  </div>
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  isComponentSearch: true,
};
