import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription, CircleIcon } from '../../components';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultAlert = () => {
  return (
    <Alert>
      <CircleIcon size={16} />
      <AlertTitle>Alert</AlertTitle>
      <AlertDescription>Here is something you should know.</AlertDescription>
    </Alert>
  );
};

export const Default: Story = {
  render: () => <DefaultAlert />,
};
