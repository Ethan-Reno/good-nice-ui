import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../../components';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultPopover = () => {
  return (
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content>Place content for the popover here.</Popover.Content>
    </Popover>
  );
};

export const Default: Story = {
  render: () => <DefaultPopover />,
};
