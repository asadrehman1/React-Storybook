import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import type { ComponentProps } from "react";
import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary",
  },
};
