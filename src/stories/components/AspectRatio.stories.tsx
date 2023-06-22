import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '../../components';

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays content within a desired ratio.'
      },
    },
  },
} as Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ratio16by9: Story = {
  render: () => (
    <div className="w-[450px] overflow-hidden rounded-md">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://source.unsplash.com/a-large-waterfall-in-the-middle-of-a-mountain-h6m-oTIKFbM"
          alt="Waterfall with 16/9 aspect ratio"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Ratio4by3: Story = {
  render: () => (
    <div className="w-[450px] overflow-hidden rounded-md">
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://source.unsplash.com/a-large-waterfall-in-the-middle-of-a-mountain-h6m-oTIKFbM"
          alt="Waterfall with 4/3 aspect ratio"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
