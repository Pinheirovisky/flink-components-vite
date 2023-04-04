import { mockCommercialPortfolio } from "@mocks";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import BusinessUnitsModal from "./BusinessUnitsModal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/BusinessUnitsModal",
  component: BusinessUnitsModal,
} as ComponentMeta<typeof BusinessUnitsModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof BusinessUnitsModal> = (args) => (
  <BusinessUnitsModal {...args} />
);

export const Light = TemplateLight.bind({});
Light.args = {
  theme: "light",
  getItemCommercialPortfolioRequest: (id: string) => id,
  modalLoading: false,
  searchedItem: mockCommercialPortfolio,
  onClose: () => true,
  id: "0",
};
export const Dark = TemplateLight.bind({});
Dark.args = {
  theme: "dark",
  getItemCommercialPortfolioRequest: (id: string) => id,
  modalLoading: false,
  searchedItem: mockCommercialPortfolio,
  onClose: () => true,
  id: "0",
};
