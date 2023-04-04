import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Modal from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}></Modal>
);

const children = (
  <div
    style={{
      height: "300px",
      width: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Conteúdo do modal
  </div>
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  onClose: undefined,
  children,
};
