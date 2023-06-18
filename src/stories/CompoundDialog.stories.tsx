import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CompoundDialog, Button, Label, Input } from '../components';

const meta = {
  title: 'Components/CompoundDialog',
  component: CompoundDialog,
  tags: ['autodocs'],
} as Meta<typeof CompoundDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCompoundDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CompoundDialog open={isOpen} onOpenChange={setIsOpen}>
      <CompoundDialog.Trigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Edit Profile
        </Button>
      </CompoundDialog.Trigger>
      <CompoundDialog.Content className="sm:max-w-[425px]">
        <CompoundDialog.Header>
          <CompoundDialog.Title>Edit profile</CompoundDialog.Title>
          <CompoundDialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </CompoundDialog.Description>
        </CompoundDialog.Header>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
        </div>
        <CompoundDialog.Footer>
          <Button type="submit" onClick={() => setIsOpen(false)}>
            Save changes
          </Button>
        </CompoundDialog.Footer>
      </CompoundDialog.Content>
    </CompoundDialog>
  );
};

export const Default: Story = {
  render: () => <DefaultCompoundDialog />,
};
