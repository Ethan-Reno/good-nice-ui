import type { Meta, StoryObj } from '@storybook/react';
import TriangleIcon from './TriangleIcon';

const meta = {
  title: 'Icons/TriangleIcon',
  component: TriangleIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof TriangleIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'test',
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
  },
};
