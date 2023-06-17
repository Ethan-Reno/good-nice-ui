import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../../src/components/ScrollArea';
import { Separator } from "../../src/components/Separator";

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} as Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const thingsToScroll = Array.from({ length: 50 }).map(
  (_, i, a) => `thingToScroll.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Things to scroll</h4>
        {thingsToScroll.map((thing) => (
          <React.Fragment>
            <div className="text-sm" key={thing}>
              {thing}
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

export const Default: Story = {
  render: () => <ScrollAreaDemo />,
};
