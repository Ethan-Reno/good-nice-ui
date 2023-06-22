import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../components';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
      },
    },
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTabs = () => (
  <Tabs defaultValue="one">
    <Tabs.List>
      <Tabs.Trigger value="one">One</Tabs.Trigger>
      <Tabs.Trigger value="two">Two</Tabs.Trigger>
      <Tabs.Trigger value="three">Three</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="one">Content for tab one</Tabs.Content>
    <Tabs.Content value="two">Content for tab two</Tabs.Content>
    <Tabs.Content value="three">Content for tab three</Tabs.Content>
  </Tabs>
);

export const Default: Story = {
  render: () => <DefaultTabs />,
};
