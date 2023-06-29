import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Label } from '../../components';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A control that allows the user to toggle between checked and not checked.',
      },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCheckbox = () => {
  return (
    <div className="flex items-center gap-2">
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
