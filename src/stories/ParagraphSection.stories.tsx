import type { Meta, StoryObj } from "@storybook/react";

import ParagraphSection from "../components/ParagraphSection";

const meta: Meta<typeof ParagraphSection> = {
  title: "ParagraphSection",
  component: ParagraphSection,
};

export default meta;

type Story = StoryObj<typeof ParagraphSection>;

export const Primary: Story = {
  args: {
    title: "Order Summary",
    description:
      "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
    colorTitle: "text-black",
    colorSubTitle: "text-desaturated-blue",
  },
  render: (args) => <ParagraphSection {...args} />,
};
