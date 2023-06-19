import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, Label } from '../../components';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="placeholder" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor="test input">Label</Label>
      <Input id="test input" placeholder="placeholder" />
    </div>
  ),
};
