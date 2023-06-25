import type { Meta, StoryObj } from "@storybook/react";

import SummaryItem from "../components/SummaryItem";

const meta: Meta<typeof SummaryItem> = {
  title: "SummaryItem",
  component: SummaryItem,
};

export default meta;

type Story = StoryObj<typeof SummaryItem>;

export const Primary: Story = {
  render: () => <SummaryItem />,
};
