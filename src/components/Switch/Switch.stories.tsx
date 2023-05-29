import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { Label } from "../Label/Label";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
} as Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSwitch = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="Label" />
      <Label htmlFor="Label">Label</Label>
    </div>
  )
};

export const Default: Story = {
  render: () => <DefaultSwitch />,
};
