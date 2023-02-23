import type { Meta, StoryObj } from '@storybook/react';
import XIcon from './XIcon';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/XIcon',
  component: XIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof XIcon>;

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
