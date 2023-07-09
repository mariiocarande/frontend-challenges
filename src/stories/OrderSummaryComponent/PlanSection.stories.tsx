import type { Meta, StoryObj } from "@storybook/react";

import PlanSection from "../../components/orderSummaryComponent/PlanSection";

const meta: Meta<typeof PlanSection> = {
  title: "OrderSummaryCompoent/PlanSection",
  component: PlanSection,
};

export default meta;

type Story = StoryObj<typeof PlanSection>;

export const Primary: Story = {
  args: {
    priceValue: "9.99",
  },
  render: (args) => <PlanSection {...args} />,
};
