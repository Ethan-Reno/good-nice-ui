import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Renders an accessible label associated with controls.'
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Label>Test Label</Label>,
};
