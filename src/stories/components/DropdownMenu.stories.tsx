import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, Button } from '../../components';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Displays a menu to the user—such as a set of actions or functions—triggered by a button.',
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState('radio-item-1');

    return (
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline">Click</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>All options</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <span>Item</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item inset>
            <span>Inset Item</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem
            checked={isChecked}
            onCheckedChange={setIsChecked}
          >
            Checkbox Item
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.RadioGroup
            value={radioValue}
            onValueChange={setRadioValue}
          >
            <DropdownMenu.RadioItem value="radio-item-1">
              Radio Item
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="radio-item-2">
              Radio Item
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.SubMenu>
            <DropdownMenu.SubTrigger>Sub Menu</DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Item</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.SubMenu>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const Checkboxes: Story = {};
