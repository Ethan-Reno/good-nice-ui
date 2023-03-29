import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/76115441?v=4',
    alt: 'alt',
    fallback: 'ER',
  },
};

export const FallbackAvatar: Story = {
  args: {
    src: '',
    alt: 'alt',
    fallback: 'ER',
    fallbackDelayMs: 600,
  },
};
