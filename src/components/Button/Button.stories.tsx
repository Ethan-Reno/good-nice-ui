import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { XIcon } from '..';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Test',
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    onClick: () => console.log('clicked')
  },
};

export const WithIcon: Story = {
  render: () =>
    <Button
      size='square'
    >
      <XIcon label="Button with X Icon" />
    </Button>
}