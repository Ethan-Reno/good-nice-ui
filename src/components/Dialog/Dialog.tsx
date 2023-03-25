import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";
import { XIcon } from "..";
import { ScreenReaderOnly } from "utils/ScreenReaderOnly";

const DialogRoot = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
)

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
      className
    )}
    {...props}
    ref={ref}
  />
))

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "relative z-50 rounded-sm bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10",
      "dark:bg-zinc-800",
      className
    )}
    {...props}
  >
    {children}
    <DialogPrimitive.Close
      className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900 dark:data-[state=open]:bg-zinc-800"
    >
      <XIcon label='Close Modal' />
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
))

export interface DialogProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  accessibleTitle: string;
}

const Dialog = ({
  trigger,
  content,
  accessibleTitle,
}: DialogProps) => {

  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
      <DialogOverlay />
        <ScreenReaderOnly asChild>
          <DialogPrimitive.Title>{accessibleTitle}</DialogPrimitive.Title>
        </ScreenReaderOnly>
        <DialogContent>{content}</DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
};

Dialog.displayName = 'Dialog';

export default Dialog;
