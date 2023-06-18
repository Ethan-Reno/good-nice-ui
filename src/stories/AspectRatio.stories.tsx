import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from "../components/AspectRatio";

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
} as Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
