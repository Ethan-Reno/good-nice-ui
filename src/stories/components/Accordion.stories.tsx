import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../components';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that each reveal an associated section of content.',
      },
    },
  },
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-[400px] border rounded-md bg-surface"
        defaultValue="item-1"
      >
        <Accordion.Item value="item-1" hasBottomBorder>
          <Accordion.Trigger className="px-4">Composable</Accordion.Trigger>
          <Accordion.Content className="px-4">
            Flexible and simple composable component API.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" hasBottomBorder>
          <Accordion.Trigger className="px-4">Accessible</Accordion.Trigger>
          <Accordion.Content className="px-4">
            100% WAI-ARIA compliant from Radix.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger className="px-4">Animated</Accordion.Trigger>
          <Accordion.Content className="px-4">
            Smooth animations powered by tailwindcss-animate.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    return (
      <Accordion
        type="multiple"
        className="w-[400px] border rounded-md bg-surface"
        defaultValue={['item-1', 'item-2']}
      >
        <Accordion.Item value="item-1" hasBottomBorder>
          <Accordion.Trigger className="px-4">Composable</Accordion.Trigger>
          <Accordion.Content className="px-4">
            Flexible and simple composable component API.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" hasBottomBorder>
          <Accordion.Trigger className="px-4">Accessible</Accordion.Trigger>
          <Accordion.Content className="px-4">
            100% WAI-ARIA compliant from Radix.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger className="px-4">Animated</Accordion.Trigger>
          <Accordion.Content className="px-4">
            Smooth animations powered by tailwindcss-animate.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};
