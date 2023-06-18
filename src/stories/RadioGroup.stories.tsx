import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem, Label } from '../components';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} as Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultRadioGroup = () => {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
};

export const Default: Story = {
  render: () => <DefaultRadioGroup />,
};
