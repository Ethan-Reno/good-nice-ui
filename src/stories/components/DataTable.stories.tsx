import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, DropdownMenu, Button, Checkbox } from '../../components';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A table for showing data',
      },
    },
  },
} as Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const data = [
  {
    id: "0982hfjns",
    amount: 1101,
    status: "pending",
    email: "z@example.com",
  },
  {
    id: "987yfu",
    amount: 10,
    status: "processing",
    email: "k@example.com",
  },
  {
    id: "f8h298hdsf",
    amount: 653,
    status: "success",
    email: "a@example.com",
  },
  {
    id: "728ed52f",
    amount: 231,
    status: "failed",
    email: "w@example.com",
  },
  {
    id: "091fshdf",
    amount: 109,
    status: "pending",
    email: "r@example.com",
  },
];
 
const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      return <div className="text-left font-medium p-4">{row.getValue("status")}</div>
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className='text-left'>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      return <div className="text-left font-medium p-4">{row.getValue("email")}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <div className='text-right'>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Label>Actions</DropdownMenu.Label>
              <DropdownMenu.Item
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>View customer</DropdownMenu.Item>
              <DropdownMenu.Item>View payment details</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      )
    },
  },
]

export const Default: Story = {
  render: () => {
    return <DataTable columns={columns} data={data} />
  },
};
