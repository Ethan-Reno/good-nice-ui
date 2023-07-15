import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, XIcon } from '../../components';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Test',
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a button or a component that looks like a button.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Default</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>,
};

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>,
};

export const Outline: Story = {
  render: () => <Button variant="outline">Outline</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost</Button>,
};

export const WithIcon: Story = {
  render: () => (
    <Button variant="default">
      <XIcon size={16} />
      <span className="pl-1">Close</span>
    </Button>
  ),
};
