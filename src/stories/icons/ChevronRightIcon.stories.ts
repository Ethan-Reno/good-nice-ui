import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon } from '../../components';

const meta = {
  title: 'Icons/ChevronRightIcon',
  component: ChevronRightIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ChevronRightIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
