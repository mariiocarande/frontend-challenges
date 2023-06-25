import type { Meta, StoryObj } from "@storybook/react";

import ResultsCard from "../components/ResultsCard";

const meta: Meta<typeof ResultsCard> = {
  title: "ResultsCard",
  component: ResultsCard,
};

export default meta;

type Story = StoryObj<typeof ResultsCard>;

export const Primary: Story = {
  render: () => <ResultsCard />,
};
