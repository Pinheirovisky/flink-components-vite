import { mockCustomer } from "@mocks";
import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";

import ClientDetailsModal from "./ClientDetailsModal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FLINK/ClientDetailsModal",
  component: ClientDetailsModal,
} as ComponentMeta<typeof ClientDetailsModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateLight: ComponentStory<typeof ClientDetailsModal> = (args) => (
  <ClientDetailsModal {...args} />
);

export const Light = TemplateLight.bind({});
Light.args = {
  getCustomersItemRequest: jest.fn(),
  modalLoading: false,
  searchedItem: mockCustomer,
  theme: "light",
  id: "123",
  onClose: jest.fn(),
};
