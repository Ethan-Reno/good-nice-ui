import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../src/components/Checkbox';
import { Label } from '../../src/components/Label';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCheckbox = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultCheckbox />,
};
