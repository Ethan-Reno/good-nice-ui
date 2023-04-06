import {
  Item,
  Label,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps,
  DropdownMenuContentProps,
  DropdownMenuLabelProps,
} from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DropdownMenuItemCustomProps
  extends DropdownMenuItemProps,
    ComponentPropsWithoutRef<typeof Item> {
  inset?: boolean;
  hasSeparator?: boolean;
}

export interface DropdownMenuLabelCustomProps
  extends DropdownMenuLabelProps,
    ComponentPropsWithoutRef<typeof Label> {
  inset?: boolean;
}

export interface DropdownMenuItemGroup {
  type: 'default' | 'checkbox' | 'radio';
  items:
    | DropdownMenuItemCustomProps[]
    | DropdownMenuCheckboxItemProps[]
    | DropdownMenuRadioItemProps[];
  label?: string;
  radioValue?: any;
  onRadioValueChange?: any;
}

export interface DropdownMenuProps {
  trigger: ReactNode;
  groupedMenuItems: DropdownMenuItemGroup[];
  label?: string;
  contentProps?: DropdownMenuContentProps;
}
