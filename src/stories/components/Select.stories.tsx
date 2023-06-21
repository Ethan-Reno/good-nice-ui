import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components';

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
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="Theme" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="light">Light</Select.Item>
        <Select.Item value="dark">Dark</Select.Item>
        <Select.Item value="system">System</Select.Item>
      </Select.Content>
    </Select>
  );
};

export const Default: Story = {
  render: () => <DefaultSelect />,
};
