import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    label: 'Label',
    title: 'test',
    placeholder: 'placeholder'
  },
};
