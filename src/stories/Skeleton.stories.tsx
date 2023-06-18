import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/Skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} as Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultSkeleton />,
};
