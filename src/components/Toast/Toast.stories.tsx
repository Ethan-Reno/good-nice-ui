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
            title: "Toast Triggered",
            description: "Here is a description",
            action: (
              <ToastAction
                altText="Optional"
                onClick={() => console.log("toast action clicked")}
              >
                Action
              </ToastAction>
            ),
          })
        }}
      >
        Trigger Toast
      </Button>
    </>
  )
};

export const Default: Story = {
  render: () => <DefaultToast />,
};
