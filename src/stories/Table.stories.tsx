import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../components/Table";
import { Badge } from "../components/Badge";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
} as Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const exercises = [
  {
    id: 1,
    name: "Bench Press",
    description: "Flat bench press with barbell",
    status: "Active",
    measurement: "Weight",
    unit: "Pounds",
  },
  {
    id: 2,
    name: "Squat",
    description: "Squat with barbell",
    status: "Active",
    measurement: "Weight",
    unit: "Pounds",
  },
  {
    id: 3,
    name: "Sprint",
    description: "Sprint as far as possible in 30 seconds",
    status: "Inactive",
    measurement: "Distance",
    unit: "Meters",
  },
  {
    id: 4,
    name: "Deadhang",
    description: "Hang from a bar for as long as possible",
    status: "Active",
    measurement: "Time",
    unit: "Seconds",
  },
]

const TableDemo = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Measurement</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {exercises.map((exercise) => (
          <TableRow key={exercise.id}>
            <TableCell>{exercise.name}</TableCell>
            <TableCell>{exercise.description}</TableCell>
            <TableCell>{exercise.measurement}</TableCell>
            <TableCell>{exercise.unit}</TableCell>
            <TableCell className="text-right"><Badge>{exercise.status}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const Default: Story = {
  render: () => <TableDemo />,
};
