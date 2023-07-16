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
        component:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
    },
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTabs = () => (
  <Tabs className="w-fit border rounded-md bg-surface" defaultValue="one">
    <Tabs.List className="w-fit border-b">
      <Tabs.Trigger className="w-[100px] hover:bg-muted" value="one">
        One
      </Tabs.Trigger>
      <Tabs.Trigger className="w-[100px] hover:bg-muted" value="two">
        Two
      </Tabs.Trigger>
      <Tabs.Trigger className="w-[100px] hover:bg-muted" value="three">
        Three
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="p-4" value="one">
      Content for tab one
    </Tabs.Content>
    <Tabs.Content className="p-4" value="two">
      Content for tab two
    </Tabs.Content>
    <Tabs.Content className="p-4" value="three">
      Content for tab three
    </Tabs.Content>
  </Tabs>
);

export const Default: Story = {
  render: () => <DefaultTabs />,
};
