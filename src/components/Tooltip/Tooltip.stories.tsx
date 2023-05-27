import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './Tooltip';
import { Button } from '../Button/Button';
import { TriangleIcon } from '../Icons';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <TriangleIcon label="tooltip" />
            <span className="sr-only">Add</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip test</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const Default: Story = {
  render: () => <DefaultTooltip />,
};
