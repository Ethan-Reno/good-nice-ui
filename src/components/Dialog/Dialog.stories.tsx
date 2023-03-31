import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dialog from '.';
import Button from '../Button';
import Input from '../Input';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerButton = <Button variant='primary'>Trigger</Button>;

  const defaultContent = (
    <div className="flex flex-col gap-4 w-80">
      <h1>Dialog</h1>
      <Input title='test' placeholder='placeholder' />
      <Button onClick={() => setIsOpen(false)} variant='primary'>Submit</Button>
    </div>
  );

  return (
    <Dialog
      trigger={triggerButton}
      accessibleTitle='title'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={defaultContent}
    />
  )
};

export const Default: Story = {
  render: () => <DefaultDialog />
};
