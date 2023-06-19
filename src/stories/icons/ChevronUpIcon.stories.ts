import type { Meta, StoryObj } from '@storybook/react';
import { ChevronUpIcon } from '../../components';

const meta = {
  title: 'Icons/ChevronUpIcon',
  component: ChevronUpIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ChevronUpIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
