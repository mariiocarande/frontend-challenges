import type { Meta, StoryObj } from "@storybook/react";

import DateItem from "../../components/ageCalulatorApp/DateItem";
import { DateType } from "../../helpers/AgeCalculatorApp.helpers";

const meta: Meta<typeof DateItem> = {
  title: "AgeCalculatorApp/DateItem",
  component: DateItem,
};

export default meta;

type Story = StoryObj<typeof DateItem>;

export const Primary: Story = {
  render: () => <DateItem type={DateType.DAY} value={26} />,
};
