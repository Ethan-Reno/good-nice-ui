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

export const Multiple: Story = {
  render: () => {
    return (
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={['item-1', 'item-2']}
      >
        <Accordion.Item value="item-1">
          <Accordion.Trigger>One</Accordion.Trigger>
          <Accordion.Content>
            Many accordion items can be open at once
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Two</Accordion.Trigger>
          <Accordion.Content>
            When using type=&quot;multiple&quot;
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Single: Story = {
  render: () => {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <Accordion.Item value="item-1">
          <Accordion.Trigger>One</Accordion.Trigger>
          <Accordion.Content>
            Only one accordion item can be open at once
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Two</Accordion.Trigger>
          <Accordion.Content>
            When using type=&quot;single&quot;
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};
