import type { Meta, StoryObj } from '@storybook/react';
import { XIcon } from '../../components';

const meta = {
  title: 'Icons/XIcon',
  component: XIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof XIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
