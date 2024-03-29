import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, Separator } from '../../components';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Augments native scroll functionality for custom, cross-browser styling.',
      },
    },
  },
} as Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Scrollable.${a.length - i}`
);

const DefaultScrollArea = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md bg-surface border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
};

export const Default: Story = {
  render: () => <DefaultScrollArea />,
};
