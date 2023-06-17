import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from "../../src/components/DatePicker";

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} as Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DatePicker />
  ),
};
