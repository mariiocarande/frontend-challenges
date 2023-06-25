import type { Meta, StoryObj } from "@storybook/react";

import SummaryCard from "../components/SummaryCard";

const meta: Meta<typeof SummaryCard> = {
  title: "SummaryCard",
  component: SummaryCard,
};

export default meta;

type Story = StoryObj<typeof SummaryCard>;

export const Primary: Story = {
  render: () => <SummaryCard />,
};
