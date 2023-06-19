import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDownIcon } from '../../components';

const meta = {
  title: 'Icons/ChevronDownIcon',
  component: ChevronDownIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ChevronDownIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
