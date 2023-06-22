import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, CircleIcon } from '../../components';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a callout for user attention.'
      },
    },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultAlert = () => {
  return (
    <Alert>
      <Alert.Content>
        <CircleIcon size={16} />
        <Alert.Title>Alert</Alert.Title>
        <Alert.Description>Here is something you should know.</Alert.Description>
      </Alert.Content>
    </Alert>
  );
};

export const Default: Story = {
  render: () => <DefaultAlert />,
};
