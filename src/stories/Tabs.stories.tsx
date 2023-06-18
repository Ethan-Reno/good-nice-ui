import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTabs = () => (
  <Tabs defaultValue="one">
    <TabsList>
      <TabsTrigger value="one">One</TabsTrigger>
      <TabsTrigger value="two">Two</TabsTrigger>
      <TabsTrigger value="three">Three</TabsTrigger>
    </TabsList>
    <TabsContent value="one">Content for tab one</TabsContent>
    <TabsContent value="two">Content for tab two</TabsContent>
    <TabsContent value="three">Content for tab three</TabsContent>
  </Tabs>
);

export const Default: Story = {
  render: () => <DefaultTabs />,
};


