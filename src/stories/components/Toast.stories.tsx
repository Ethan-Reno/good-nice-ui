import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Toast } from '../../components';
import { Toaster, useToast } from '../../utils';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
} as Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultToast = () => {
  const { toast } = useToast();

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Toast Triggered',
            description: 'Here is a description',
            action: (
              <Toast.Action
                altText="Optional"
                onClick={() => console.log('toast action clicked')}
              >
                Action
              </Toast.Action>
            ),
          });
        }}
      >
        Trigger Toast
      </Button>
    </>
  );
};

export const Default: Story = {
  render: () => <DefaultToast />,
};
