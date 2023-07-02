import type { Meta, StoryObj } from "@storybook/react";

import CalculatorCard from "../../components/ageCalulatorApp/CalculatorCard";

const meta: Meta<typeof CalculatorCard> = {
  title: "AgeCalculatorApp/CalculatorCard",
  component: CalculatorCard,
};

export default meta;

type Story = StoryObj<typeof CalculatorCard>;

export const Primary: Story = {
  args: {},
};
