import type { Meta, StoryObj } from '@storybook/react';
import { CircleIcon } from '../../components';

const meta = {
  title: 'Icons/CircleIcon',
  component: CircleIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof CircleIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
