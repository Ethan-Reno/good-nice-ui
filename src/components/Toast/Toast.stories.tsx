import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Toast, ToastAction } from "./Toast";
import { Toaster } from "./Toaster";
import { useToast } from "./useToast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
} as Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultToast = () => {
  const { toast } = useToast()
 
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Add to calendar
      </Button>
    </>
  )
};

export const Default: Story = {
  render: () => <DefaultToast />,
};
