import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An image element with a fallback for representing the user.',
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Image
          src="https://avatars.githubusercontent.com/u/76115441?v=4"
          alt="alt"
        />
        <Avatar.Fallback>ER</Avatar.Fallback>
      </Avatar>
    );
  },
};

export const Fallback: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Fallback>ER</Avatar.Fallback>
      </Avatar>
    );
  },
};
