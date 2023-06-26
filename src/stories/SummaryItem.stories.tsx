import type { Meta, StoryObj } from "@storybook/react";
import SummaryItem from "../components/SummaryItem";

const meta: Meta<typeof SummaryItem> = {
  title: "SummaryItem",
  component: SummaryItem,
};

export default meta;

type Story = StoryObj<typeof SummaryItem>;

export const Reaction: Story = {
  args: {
    title: "Reaction",
    category: "reaction",
    score: 80,
  },
  render: ({ ...args }) => <SummaryItem {...args} />,
};

export const Memory: Story = {
  args: {
    title: "Memory",
    category: "memory",
    score: 92,
  },
  render: ({ ...args }) => <SummaryItem {...args} />,
};

export const Visual: Story = {
  args: {
    title: "Visual",
    category: "visual",
    score: 61,
  },
  render: ({ ...args }) => <SummaryItem {...args} />,
};

export const Verbal: Story = {
  args: {
    title: "Verbal",
    category: "verbal",
    score: 72,
  },
  render: ({ ...args }) => <SummaryItem {...args} />,
};
