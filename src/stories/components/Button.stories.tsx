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
        component: 'A vertically stacked set of interactive headings that each reveal an associated section of content.'
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button variant="primary">Button</Button>,
};

export const WithIcon: Story = {
  render: () => (
    <Button variant="primary">
      <XIcon size={16} />
      <span className="pl-1">Close</span>
    </Button>
  ),
};
