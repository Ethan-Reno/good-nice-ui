import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenu, { DropdownMenuItemGroup } from '.';
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

const standardMenuItems: DropdownMenuItemGroup[] = [
  {
    type: 'item',
    label: 'Standard Items',
    items: [
      {
        children: 'Option 1',
        onSelect: () => console.log('clicked Option 1'),
      },
      {
        children: 'Option 2',
        onSelect: () => console.log('clicked Option 2'),
      },
      {
        children: 'Disabled Option',
        onSelect: () => console.log('should not see this'),
        disabled: true
      },
    ]
  },
];

const DropdownMenuWithCheckmarks = () => {
  const [showOption1, setShowOption1] = useState(true)
  const [showOption2, setShowOption2] = useState(false)

  const menuItems: DropdownMenuItemGroup[] = [
    {
      type: 'checkbox',
      label: 'Checkbox Items',
      items: [
        {
          children: 'Option 1',
          onSelect: () => console.log('clicked Option 1'),
          checked: showOption1,
          onCheckedChange: () => setShowOption1(!showOption1)
        },
        {
          children: 'Option 2',
          onSelect: () => console.log('clicked Option 2'),
          checked: showOption2,
          onCheckedChange: () => setShowOption2(!showOption2)
        },
      ]
    },
  ];

  return (
    <DropdownMenu 
      trigger={triggerButton}
      groupedMenuItems={menuItems}
    />
  )
}

const DropdownMenuWithRadioGroup = () => {
  const [value, setValue] = useState("Option 1")

  const menuItems: DropdownMenuItemGroup[] = [
    {
      type: 'radio',
      label: 'Radio Items',
      value: value,
      onValueChange: setValue,
      items: [
        {
          children: 'Option 1',
          onSelect: () => console.log('clicked Option 1'),
          value: "Option 1"
        },
        {
          children: 'Option 2',
          onSelect: () => console.log('clicked Option 2'),
          value: "Option 2"
        },
      ]
    },
  ];

  return (
    <DropdownMenu 
      trigger={triggerButton}
      groupedMenuItems={menuItems}
    />
  )
}

export const Default: Story = {
  args: {
    groupedMenuItems: standardMenuItems,
    trigger: triggerButton,
  }
};

export const WithCheckboxes: Story = {
  render: () => <DropdownMenuWithCheckmarks />
}

export const WithRadioGroup: Story = {
  render: () => <DropdownMenuWithRadioGroup />
}
