import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipProvider,
} from '../../components';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <span>Hover here</span>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>Tooltip test</p>
        </Tooltip.Content>
      </Tooltip>
    </TooltipProvider>
  );
};

export const Default: Story = {
  render: () => <DefaultTooltip />,
};
