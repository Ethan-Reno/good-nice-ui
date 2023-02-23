import type { Meta, StoryObj } from '@storybook/react';
import TriangleIcon from './TriangleIcon';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Icons/TriangleIcon',
  component: TriangleIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof TriangleIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    label: 'test',
    size: 24,
    color: 'currentColor',
    strokeWidth: 2
  },
};
