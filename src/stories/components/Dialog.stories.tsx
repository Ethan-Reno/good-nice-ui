import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, Button } from '../../components';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
      },
    },
  },
} as Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            Trigger Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Title>Dialog Test</Dialog.Title>
          <Dialog.Description>
            Here is a description for the dialog.
          </Dialog.Description>
          <Dialog.Footer>
            <Button type="button" variant='secondary' onClick={() => setIsOpen(false)}>
              Action
            </Button>
            <Button type="button" onClick={() => setIsOpen(false)}>
              Action
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
};
