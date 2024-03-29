import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, Input, Label, Separator } from '../../components';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a card with header, content, and footer.',
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
        <Card.Description>
          Include a description for more information.
        </Card.Description>
      </Card.Header>
      {/* <Separator /> */}
      <Card.Content className="flex flex-col">
        <Label className="text-lowContrast-foreground" htmlFor="name">
          Name
        </Label>
        <Input
          className="bg-background"
          id="name"
          placeholder="Name of your project"
        />
      </Card.Content>
      <Card.Footer className="flex justify-end gap-4">
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </Card.Footer>
    </Card>
  );
};

export const Default: Story = {
  render: () => <DefaultCard />,
};
