import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../src/components/Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSelect = () => {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export const Default: Story = {
  render: () => <DefaultSelect />,
};
