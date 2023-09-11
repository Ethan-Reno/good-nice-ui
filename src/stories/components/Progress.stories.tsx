import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../components';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
    },
  },
} as Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultProgress = () => {
  return (
    <Progress value={50} />
  );
}

export const Default: Story = {
  render: () => <DefaultProgress />,
};
