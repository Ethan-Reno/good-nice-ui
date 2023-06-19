import type { Meta, StoryObj } from '@storybook/react';
import { ChevronLeftIcon } from '../../components';

const meta = {
  title: 'Icons/ChevronLeftIcon',
  component: ChevronLeftIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ChevronLeftIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
