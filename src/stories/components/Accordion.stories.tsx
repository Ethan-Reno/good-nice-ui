import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../components';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Accessible</Accordion.Trigger>
          <Accordion.Content>
            Adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Animated</Accordion.Trigger>
          <Accordion.Content>
            By default, but can be disabled.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};
