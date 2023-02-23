import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dialog from '.';
import Button from '../Button';
import Input from '../Input';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Default: Story = {
  args: {
    trigger: <Button variant='default'>Trigger</Button>,
    title: 'Title',
    description: 'Description',
    content: <Input label='Label' title='test' placeholder='placeholder' />,
    primaryButton: <Button variant='default' onClick={() => console.log('do something')}>Do something</Button>
  },
};
