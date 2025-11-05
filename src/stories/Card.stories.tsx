import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import Card from "../components/Card";

type StoryProps = ComponentProps<typeof Card>;

const meta: Meta<StoryProps> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
    className: { control: "text" },
    style: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "Card Content",
  },
  render: (args: StoryProps) => <Card {...args} />,
};

export const WithChildren: Story = {
  render: (args: StoryProps) => (
    <Card {...args}>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Click Me
      </button>
    </Card>
  ),
  args: {
    title: "Card with Button",
    content: "This card has custom children inside it.",
  },
};