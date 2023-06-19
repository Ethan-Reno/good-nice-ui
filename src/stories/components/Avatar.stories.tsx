import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../../components';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/76115441?v=4"
          alt="alt"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    );
  },
};

export const FallbackAvatarStory: Story = {
  render: () => {
    return (
      <Avatar>
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    );
  },
};
