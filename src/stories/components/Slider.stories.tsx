import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../../components';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An input where the user selects a value from within a given range.'
      },
    },
  },
} as Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSlider = () => {
  return (
    <div className="w-96">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultSlider />,
};
