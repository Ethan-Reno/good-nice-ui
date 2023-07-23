import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from '../../components';

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog that slides in from the bottom of the screen.',
      },
    },
  },
} as Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSheet = () => {
  return (
    <Sheet>
      <Sheet.Trigger>Open</Sheet.Trigger>
      <Sheet.Content animationDuration={700} side="top">
        <Sheet.Header>
          <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
          <Sheet.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  );
};

export const Default: Story = {
  render: () => <DefaultSheet />,
};
