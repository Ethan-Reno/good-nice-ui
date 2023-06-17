import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from "../../src/components/Calendar";

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export const Default: Story = {
  render: () => <DefaultCalendar />,
};
