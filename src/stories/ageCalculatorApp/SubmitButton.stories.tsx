import type { Meta, StoryObj } from "@storybook/react";

import SubmitButton from "../../components/ageCalulatorApp/SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  title: "AgeCalculatorApp/SubmitButton",
  component: SubmitButton,
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Primary: Story = {
  render: () => <SubmitButton />,
};
