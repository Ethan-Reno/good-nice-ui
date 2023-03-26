import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenu from '.';
import Button from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const triggerButton = <Button variant='primary'>Trigger</Button>;

const menuItems = [
  {
    textValue: 'Normal Option',
    onSelect: () => console.log('clicked Normal Option')
  },
  {
    textValue: 'Disabled Option',
    disabled: true,
    onSelect: () => console.log('should not see this')
  },
  {
    textValue: 'Another Option',
    onSelect: () => console.log('clicked Another Option')
  }
]

export const Default: Story = {
  args: {
    trigger: triggerButton,
    menuItems: menuItems,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
    trigger: triggerButton,
    menuItems: menuItems,
  },
};
