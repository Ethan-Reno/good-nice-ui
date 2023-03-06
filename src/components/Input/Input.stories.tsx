import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { Label } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  render: () =>
    <Input placeholder="placeholder" />
};

export const WithLabel: Story = {
  render: () =>
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor="test input">Label</Label>
      <Input id="test input" placeholder="placeholder" />
    </div>
};
