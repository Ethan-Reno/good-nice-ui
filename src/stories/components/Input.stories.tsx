import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Input, Label } from '../../components';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Displays a form input field or a component that looks like an input field.',
      },
    },
  },
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

export const WithText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-muted-foreground">Enter your email address.</p>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};
