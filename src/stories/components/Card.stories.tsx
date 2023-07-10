import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, Input, Label } from '../../components';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Displays a card with header, content, and footer.',
      },
    },
  },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCard = () => {
  return (
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Card Header</Card.Title>
        <Card.Description>Include a description for more information.</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </Card.Content>
      <Card.Footer className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </Card.Footer>
    </Card>
  );
};

export const Default: Story = {
  render: () => <DefaultCard />,
};
