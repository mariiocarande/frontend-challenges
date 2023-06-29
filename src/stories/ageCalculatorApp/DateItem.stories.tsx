import type { Meta, StoryObj } from "@storybook/react";

import DateItem, { DateType } from "../../components/ageCalulatorApp/DateItem";

const meta: Meta<typeof DateItem> = {
  title: "DateItem",
  component: DateItem,
};

export default meta;

type Story = StoryObj<typeof DateItem>;

export const Primary: Story = {
  render: () => <DateItem type={DateType.DAY} value={26} />,
};
