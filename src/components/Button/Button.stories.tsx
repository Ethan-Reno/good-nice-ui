import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { XIcon } from '../Icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Test',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button variant="primary">
      Button
    </Button>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button variant="primary">
      <XIcon label="X Icon" />
      Close
    </Button>
  ),
};
