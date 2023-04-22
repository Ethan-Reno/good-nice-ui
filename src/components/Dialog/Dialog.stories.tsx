import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Dialog } from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerButton = <Button variant="primary">Trigger</Button>;

  const defaultContent = (
    <div className="flex flex-col gap-4 pt-5 w-full">
      <Input title="test" placeholder="placeholder" className='w-full' />
      <Button onClick={() => setIsOpen(false)} variant="primary">
        Submit
      </Button>
    </div>
  );

  return (
    <Dialog
      trigger={triggerButton}
      title="title"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={defaultContent}
    />
  );
};

export const Default: Story = {
  render: () => <DefaultDialog />,
};
