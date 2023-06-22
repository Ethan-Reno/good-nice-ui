import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  Badge,
} from '../../components';

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A responsive table component.'
      },
    },
  },
} as Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const exercises = [
  {
    id: 1,
    name: 'Bench Press',
    description: 'Flat bench press with barbell',
    status: 'Active',
    measurement: 'Weight',
    unit: 'Pounds',
  },
  {
    id: 2,
    name: 'Squat',
    description: 'Squat with barbell',
    status: 'Active',
    measurement: 'Weight',
    unit: 'Pounds',
  },
  {
    id: 3,
    name: 'Sprint',
    description: 'Sprint as far as possible in 30 seconds',
    status: 'Inactive',
    measurement: 'Distance',
    unit: 'Meters',
  },
  {
    id: 4,
    name: 'Deadhang',
    description: 'Hang from a bar for as long as possible',
    status: 'Active',
    measurement: 'Time',
    unit: 'Seconds',
  },
];

const TableDemo = () => {
  return (
    <Table>
      <Table.Content>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Name</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head>Measurement</Table.Head>
            <Table.Head>Unit</Table.Head>
            <Table.Head className="text-right">Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {exercises.map((exercise) => (
            <Table.Row key={exercise.id}>
              <Table.Cell>{exercise.name}</Table.Cell>
              <Table.Cell>{exercise.description}</Table.Cell>
              <Table.Cell>{exercise.measurement}</Table.Cell>
              <Table.Cell>{exercise.unit}</Table.Cell>
              <Table.Cell className="text-right">
                <Badge>{exercise.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Content>
    </Table>
  );
};

export const Default: Story = {
  render: () => <TableDemo />,
};
