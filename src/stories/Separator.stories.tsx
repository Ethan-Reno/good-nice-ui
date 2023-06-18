import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from "../components/Separator";

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
} as Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSeparator = () => {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        Default separator with horizontal orientation.
      </p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>vertical</div>
        <Separator orientation="vertical" />
        <div>orientation</div>
        <Separator orientation="vertical" />
        <div>separators</div>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => <DefaultSeparator />,
};
