import type { Meta, StoryObj } from "@storybook/react";

import NumberInput from "../../components/ageCalulatorApp/NumberInput";
import { DateType } from "../../helpers/AgeCalculatorApp.helpers";

const meta: Meta<typeof NumberInput> = {
  title: "AgeCalculatorApp/NumberInput",
  component: NumberInput,
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  args: {
    type: DateType.DAY,
  },
};
